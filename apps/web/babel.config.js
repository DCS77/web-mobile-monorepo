const path = require('path');

{
    rules: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          "@babel/preset-react",
          {
            plugins: [
              '@babel/plugin-proposal-class-properties',
              "@babel/plugin-transform-runtime",
              ["module-resolver", {
                "alias": {
                  "^react-native$": "react-native-web"
                }
              }]
            ]
          }
        ]
      },
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.ttf$/,
      loader: "url-loader",
      include: path.resolve(__dirname, "../../packages/ui/public/fonts"),
    }
  ]
}