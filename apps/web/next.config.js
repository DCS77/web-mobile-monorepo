const withTM = require("next-transpile-modules")(["ui"]);
const path = require('path');
const isDevBuild = true;

module.exports = withTM({
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push(
      {
        test: /\.m?(js|jsx|tx|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
            ["@babel/preset-react", {"runtime": "automatic"}]],
            plugins: [
              '@babel/plugin-syntax-jsx',
              "@babel/plugin-transform-runtime",
              ["module-resolver", {
                "alias": {
                  "^react-native$": "react-native-web"
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.ttf$/,
        loader: "url-loader",
        include: path.resolve(__dirname, "../../packages/ui/public/fonts"),
        // use: 'file?name=fonts/[name].[ext]!static'
      },
      {
        test: /\.css$/,
        use: isDevBuild ? [
          'style-loader',
          "typings-for-css-modules-loader?namedExport&modules"
        ] : ExtractTextPlugin.extract({
          use: 'typings-for-css-modules-loader?minimize&namedExport&modules'
        })
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules\/(?!(react-native-elements|react-native-vector-icons)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ["@babel/preset-react", {"runtime": "automatic"}]
            ],
            plugins: [
              '@babel/plugin-syntax-jsx',
              "@babel/plugin-transform-runtime",
              ["module-resolver", {
                "alias": {
                  "^react-native$": "react-native-web"
                }
              }]
            ]
          },
        }
      },
    )

    config.resolve.alias['react-native$'] = 'react-native-web';
    config.externals['react-native'] = true;

    return config
  },
});
