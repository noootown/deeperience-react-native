# Deeperience-React-Native

This boilerplate was inspired by boilerplates below

- [este](https://github.com/este/este)
- [snowflake](https://github.com/bartonhammond/snowflake)

## Books

#### Online books 

- [Chinese (Traditional)](https://noootown.gitbooks.io/deeperience-react-native-boilerplate/content/)

#### Repository 
- [Chinese (Traditional)](https://github.com/noootown/book-deeperience-react-native)

## Techniques
- [Reactjs](https://facebook.github.io/react/) & [React Native](https://facebook.github.io/react-native/)
- [Firebase](https://firebase.google.com/?hl=zh-TW)
- [Redux](https://github.com/reactjs/redux) + [Redux-Thunk](https://github.com/gaearon/redux-thunk) + [Redux-Saga](https://github.com/yelouafi/redux-saga)
- ES6+
- [Jest](https://facebook.github.io/jest/) + [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/)
- [ESlint](http://eslint.org/)
- [Flow](https://flowtype.org/)

## Features
- Linter
- Airbnb coding styles
- Static type Checker
- Unit Test
- I18n
- Live Reload + Hot Reload
- Firebase Login
- BAAS (Backend as a server)
- Social Authentication (Facebook, Google+)
- Git Precommit test
- iOS & Android Custom Style
- Local storage
- [Font awesome](http://fontawesome.io/)

## Installation

1. [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

2. Install Deeperience-React-Native

```
git clone https://github.com/noootown/deeperience-react-native.git

npm install

```

## Config (Required)

Service in this boilerplate rely on [Firebase](https://console.firebase.google.com/), so to make this boilerplate run, you must create your own firebase config ```src/config.js```. To check the format of the config, you can take a look at ```src/config-template.js```

To get the api key and configs of firebase, you can take a look at [Firebase Document](https://firebase.google.com/docs/web/setup). Your API key must be in your firebase project in the [console](https://console.firebase.google.com/)

## Run

Open a terminal and type

```
npm run start
```
Then open another terminal and run the following script:

#### Android

```
react-native run-android
```  

#### iOS
```
react-native run-ios
```

## Other Useful Script

We defined a lot of useful script in the package.json, and you can just do some magic to your projects within a few word typing.

#### Run linter
```
npm run lint
```

#### Fix coding style
```
npm run fix-lint
```

#### Static type checking

```
npm run flow

or 

flow
```

#### Jest watching
```
npm run jw
```

#### Mocha
```
npm run mocha
```

#### Test
```
npm run test
```

#### Precommit (lint + static type check + unit test)
```
npm run precommit
```

## Deploy

- [Generating singed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html)

## LICENSE

#### MIT








