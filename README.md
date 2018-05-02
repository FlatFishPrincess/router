# React 102

React 102 is a workshop for those that want to learn React.js and its ecosystem, step by step.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">react-102</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/react-bootcamp/react-102" property="cc:attributionName" rel="cc:attributionURL">Mathieu ANCELIN and Sébastien PRUNIER</a> is distributed under the terms of the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons - Attribution - NonCommercial - ShareAlike</a>.

## The Single Page Application version of the "Open Wine Database" app with React Router

During the workshop you will create a webapp to manage your favorite wines* !

The source code is based on the previous version of the app described in [react-101](https://github.com/react-bootcamp/react-101).

The main features of the app are

* List the wines by regions
* Display the details of a specific wine
* Like a wine
* Add comments on a wine

\* *Alcohol abuse is dangerous for health, consume with moderation ;-)*

In this version, the app will be a *Single Page Application* based on [React Router](https://github.com/ReactTraining/react-router).

You can try the app [here](http://bit.ly/rbw-102)

<img src='https://github.com/react-bootcamp/react-102/raw/master/instructions/img/spa.gif' height='500' alt='The SPA Wine App'>

## Technical requirements

The technical requirements are the following

* Node (version 7.x or 8.x) with NPM (at least version 3.x)
  * for more convenience use nvm: https://github.com/creationix/nvm
* Yarn (https://yarnpkg.com)
* Git
* A text editor (if you don't have one, just use Atom)
* React Developer Tools

### Node

Node is the first requirement for the workshop. You can get it on the official website at [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

You can verify your current version of `node` and `npm` by running the following commands :

```sh
$ node -v
v8.6.0

$ npm -v
4.2.0

$yarn -v
1.2.1
```

you can upgrade an existing version of npm by running the following command :

```sh
npm update -g npm
```

We strongly recommend to use `node` >= 7 and `yarn` for faster installation speed and better disk usage. You can use `nvm` to easily switch Node versions between different projects.

### Git

Download and install the appropriate version of Git on your OS, follow the instructions available on the official website: [https://git-scm.com/downloads](https://git-scm.com/downloads)

Verify the installation by running the following command in a terminal:

```sh
$ git --version
git version 2.8.4
```

### Atom

If you don't have a favorite text editor to write Javascript application, we advise you to use [Atom](https://atom.io).

Download and install Atom and install the following packages:

* language-javascript-jsx
* linter-eslint

To learn how to manage Atom packages: http://flight-manual.atom.io/using-atom/sections/atom-packages/

### React Developer Tools

In order to have specific tools to react in your web browser, install **React Developer Tools** :

* [React Developer Tools for Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [React Developer Tools for Mozilla Firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)

## Install dependencies

If you want to pre-install the dependencies of the project to avoid any network issue, first clone the `react-102` repo then run the `npm install` command

```sh
git clone https://github.com/react-bootcamp/react-102 react-102
cd react-102
npm install
```

or if you want to use `yarn` instead run

```sh
git clone https://github.com/react-bootcamp/react-102 react-102
cd react-102
yarn install
```

### Open Wine API

The app uses a REST API as a data source to display wines by regions, with their details, a photo of the bottle, etc ... This API is actually a small server written with NodeJS / Express, data are stored in memory.

You can use the online version of the API deployed on Heroku. You can find the documentation of the API [here](https://bit.ly/rbw-api) or even [here](https://bit.ly/rbw-api-swag). You can also use a graphql version of the API available [here](https://bit.ly/rbw-graphql). We recommend that you read at least once on this documentation to get an overall idea of ​​the data provided by the API to power your application.

If you don't want to/can't use the online version of the API, and want to run it on your machine, just use the following commands

```sh
git clone https://github.com/react-bootcamp/wines-api.git wines-api
cd wines-api
yarn install
yarn start
```

Then go to [http://localhost:3000](http://localhost:3000) to explore the documentation of the different routes available.


### Steps

* [Step 0 : client-side routing](./instructions/0-client-side-routing.md)
* [Step 1 : react-router](./instructions/1-react-router.md)
* [Step 2 : regions page](./instructions/2-regions-page.md)
* [Step 3 : wine list page](./instructions/3-wine-list-page.md)
* [Step 4 : wine details page](./instructions/4-wine-details-page.md)
# router
