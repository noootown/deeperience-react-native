import { fork, take, put } from 'redux-saga/effects'
import * as mainActions from './mainActions'
import { getMainStorage, setFirstTimeStorage } from './mainStorage'
import { Actions } from 'react-native-router-flux'

const {
  LOAD_APP,
} = require('../../lib/constants').default

export function* loadApp(payload) {
  try {
    const { firstTime } =  yield getMainStorage()
    if (firstTime === undefined || firstTime === true) {
      put(mainActions.setFirstTime())
      yield setFirstTimeStorage()
      setTimeout(() => Actions.Introduction(), 4000)
    } else {
      setTimeout(() => Actions.LoginMain({ back: false }), 4000)
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 * Watchers
 */

export function* watchLoadApp() {
  while (true) {
    yield take(LOAD_APP)
    yield fork(loadApp)
  }
}

export default [
  fork(watchLoadApp),
]

