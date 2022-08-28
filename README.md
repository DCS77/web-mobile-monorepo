# Web and Mobile App Monorepo

The goal for this repository is to have a working NextJS app and React Native app making use of a shared UI library, along with various useful features like icons, themes and languages.

## Current Progress

- Turbo repo used to initialise monorepo project
  - Three main web apps created (web, admin, docs)
  - One mobile app created
  - UI package added
  - Stories app added for shared UI library
- Web, mobile apps and stories build
- `react-native-vector-icons` added to mobile repo

## To be completed

- Allow `react-native-vector-icons` to be used in web apps using `react-native-web`
- Add themes
- Add i18n language support
- Create new web and mobile apps using this template

### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org) app
- `docs`: a [Next.js](https://nextjs.org) app
- `mobile`: a [React Native](https://reactnative.dev/) app
- `stories`: a [React](https://reactjs.org/) app with a [react-cosmos](https://reactcosmos.org/) storybook for displaying components
- `web`: a [Next.js](https://nextjs.org) app, for the primary website
- `ui`: a stub React component library shared by web and mobile applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```
