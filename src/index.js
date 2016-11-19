'use strict'
import React from 'react'
import { AppRegistry, ToastAndroid } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import configureStore from './lib/configureStore'
import LoadingApp from './containers/LoadingApp'
import LoginMain from './containers/LoginMain'
import LoginRegister from './containers/LoginRegister'
import Main from './containers/Main'
import Custom from './containers/Custom'
import Introduction from './containers/Introduction'
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage'
import { setPlatform, setVersion } from './reducers/device/deviceActions'
import { setStore } from './reducers/global/globalActions'
import AuthInitialState from './reducers/auth/authInitialState'
import DeviceInitialState from './reducers/device/deviceInitialState'
import GlobalInitialState from './reducers/global/globalInitialState'
import CustomInitialState from './reducers/custom/customInitialState'
import MainInitialState from './reducers/main/mainInitialState'
import pack from '../package'
import I18n from './lib/i18n'
// Support fallbacks so en-US & en-BR both use en
I18n.fallbacks = true
I18n.locale = 'zh-TW'
const VERSION = pack.version

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
  return {
    auth: new AuthInitialState(),
    device: new DeviceInitialState(),
    global: new GlobalInitialState(),
    custom: new CustomInitialState(),
    main: new MainInitialState(),
  }
}

export default function native(platform) {
  class Deeperience extends React.Component {

    constructor(props) {
      super(props)
      this.exitOrNot = false
    }

    render() {
      const store = configureStore({
        initialState: getInitialState(),
        platformDeps: { createStorageEngine },
      })
      // configureStore will combine reducers from snowflake and main application
      // it will then create the store based on aggregate state from all reducers
      store.dispatch(setPlatform(platform))
      store.dispatch(setVersion(VERSION))
      store.dispatch(setStore(store))

      // setup the router table with App selected as the initial component
      // note: See https://github.com/aksonov/react-native-router-flux/issues/948

      return (
        <Provider store={store}>
          <Router
            onExitApp={() => {
              if (!this.exitOrNot) {
                ToastAndroid.show(I18n.t('Toast.pressAgainExit'), ToastAndroid.SHORT)
                this.exitOrNot = true
                setTimeout(() => { this.exitOrNot = false }, 3000)
                return true
              } else return false
            }}
          >
            <Scene key="root"
                   hideNavBar={true}
            >
              <Scene key="LoadingApp"
                     component={LoadingApp}
                     initial={true}
              />
              <Scene key="Main"
                     component={Main}
              />
              <Scene key="Custom"
                     component={Custom}
              />
              <Scene key="Introduction"
                     component={Introduction}
              />
              <Scene key="LoginMain"
                     component={LoginMain}
              />
              <Scene key="LoginRegister"
                     component={LoginRegister}
              />
            </Scene>
          </Router>
        </Provider>
      )
    }
  }

  Deeperience.childContextTypes = {
    store: React.PropTypes.object,
  }

  AppRegistry.registerComponent('deeperience', () => Deeperience)
}
