import { call, fork, take, put } from 'redux-saga/effects'
import * as authActions from './authActions'
import ApiFactory from '../../api/apiFactory'
import UserModel from '../../model/UserModel'
import { Actions } from 'react-native-router-flux'
import SimpleAlert from 'react-native-simpledialog-android'
import I18n from '../../lib/i18n'

const {
  SIGNUP_START,
  LOGOUT_START,
  LOGIN_START,
  RESET_PASSWORD_START,
  INIT_AUTH,
  FB_LOGIN_START,
} = require('../../lib/constants').default

const api = new ApiFactory()

export function* signUp(payload) {
  try {
    yield put(authActions.signupRequest())
    // user is a promise backed from firebase
    const user = yield call([api, api.signup], payload)
    // newUser will be written in database
    const newUser = yield new UserModel(user.uid, {
      email: payload.email,
      username: payload.username,
    })
    yield call([api, api.writeDataBase], newUser.getPath(), newUser.getData())
    yield put(authActions.signupSuccess({ uid: user.uid }))
    yield put(authActions.logoutState())
    Actions.Main()
  } catch (error) {
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.signupError'))
    yield put(authActions.signupFailure(error))
  }
}

export function* initAuth() {
  try {
    const user = yield call([api, api.initAuth])
    if (user) {
      yield put(authActions.loginSuccess({
        uid: user.uid,
        username: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      }))
      yield put(authActions.logoutState())
      setTimeout(() => Actions.Main(), 4000)
    } else {
      yield put(authActions.loginState())
      setTimeout(() => Actions.Introduction(), 4000)
    }
  } catch (error) {
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.loginError'))
    yield put(authActions.loginFailure(error))
  }
}

export function* logout() {
  try {
    yield put(authActions.logoutRequest())
    yield call([api, api.logout])
    yield put(authActions.loginState())
    yield put(authActions.logoutSuccess())
    Actions.LoginMain({ back: false })
  } catch (error) {
    yield put(authActions.loginState())
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.logoutError'))
    yield put(authActions.logoutFailure(error))
  }
}

export function* login(payload) {
  try {
    yield put(authActions.loginRequest())
    const user = yield call([api, api.login], payload)
    yield put(authActions.loginSuccess({
      uid: user.uid,
      username: user.displayName,
      email: user.email,
      avatar: user.photoURL,
    }))
    yield put(authActions.logoutState())
    Actions.Main()
  } catch (error) {
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.loginError'))
    yield put(authActions.loginFailure(error))
  }
}

export function* resetPassword(email) {
  try {
    yield put(authActions.resetPasswordRequest())
    yield call([api, api.resetPassword], email)
    yield put(authActions.loginState())
    yield put(authActions.resetPasswordSuccess())
    Actions.pop()
  } catch (error) {
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.resetPasswordError'))
    yield put(authActions.resetPasswordFailure(error))
  }
}

export function* facebookLogin(payload) {
  try {
    const user = yield call([api, api.fblogin], payload)
    const newUser =  yield new UserModel(user.uid, {
      email: user.email,
      username: user.displayName,
      avatar: user.photoURL,
    })
    yield call([api, api.updateDataBase], newUser.getPath(), newUser.getData())
    yield put(authActions.loginSuccess({
      uid: user.uid,
      ...newUser.getData(),
    }))
    Actions.Main()
  } catch (error) {
    SimpleAlert.alert(I18n.t('AuthMessage.error'), I18n.t('AuthMessage.loginError'))
    yield put(authActions.loginFailure(error))
  }
}

/**
 * Watchers
 */

export function* watchSignUp() {
  while (true) {
    const { payload } = yield take(SIGNUP_START)
    yield fork(signUp, payload)
  }
}

export function* watchInitAuth() {
  while (true) {
    yield take(INIT_AUTH)
    yield fork(initAuth)
  }
}

export function* watchLogout() {
  while (true) {
    yield take(LOGOUT_START)
    yield fork(logout)
  }
}

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(LOGIN_START)
    yield fork(login, payload)
  }
}

export function* watchResetPassword() {
  while (true) {
    const { payload } = yield take(RESET_PASSWORD_START)
    yield fork(resetPassword, payload)
  }
}

export function* watchFacebookLogin() {
  while (true) {
    const { payload } = yield take(FB_LOGIN_START)
    yield fork(facebookLogin, payload)
  }
}

export default [
  fork(watchSignUp),
  fork(watchInitAuth),
  fork(watchLogout),
  fork(watchLogin),
  fork(watchResetPassword),
  fork(watchFacebookLogin),
]
