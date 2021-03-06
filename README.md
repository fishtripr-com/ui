# Fishtripr UI

Fishtripr UI is a set of [Vue](https://vuejs.org/) components that implement the [Fishtripr](https://www.fishtripr.com) design specification.

## Installation

Fishtripr UI can be installed as an [npm package](https://www.npmjs.com/package/@fishtripr-com/ui):

```bash
$ npm install --save @fishtripr-com/ui
```

Or with Yarn:

```bash
$ yarn add @fishtripr-com/ui
```

## How to make a release

1. Always make your changes on a feature branch, starting from `development`, with the version number (for example `feature-v0.0.2`).
2. Make sure you build the package by running `yarn build`. It will create a new `index.js` file in `dist`.
3. Bump the version in `package.json` by using the command `npm version` (make sure it's the same version as the name of your branch).
4. Make a pull request on GitHub and wait for approval.
5. Once the pull request is approved, merge it into the `development` branch.
6. Publish to npm using the `npm publish --access=public` command.
7. Merge the `development` branch into `master` and push to GitHub.

## Storybook

To start Storybook for this project, run this command:

```bash
$ yarn run storybook
```

To build storybook for deployment run:

```bash
$ yarn run build:storybook
```

This will redirect to [http://localhost:9001](http://localhost:9001) where you can browse all the components.

## License

This project is licensed under the terms of the MIT license.
