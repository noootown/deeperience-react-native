/**
 * # globalReducer.js
 *
 */
'use strict'
import InitialState from './globalInitialState'
const initialState = new InitialState()
const {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,

  GET_STATE,
  SET_STATE,
  SET_STORE,
} = require('../../lib/constants').default

/**
 * ## globalReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function globalReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)

  switch (action.type) {
    /**
     * ### Save the payload in the store
     *
     * This payload is the ```currentUser``` object returned by
     * Parse.com.  It contains the ```sessionToken``` and the user's
     * ```objectId``` which will be needed for some calls to Parse
     */
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return state.set('currentUser', action.payload)

    /**
     * ### Clear currentUser
     */
    case LOGOUT_SUCCESS:
      return state.set('currentUser', null)

    /**
     * ### sets the payload into the store
     *
     * Note* this is for support of Hot Loading - the payload is the
     * ```store``` itself.
     *
     */
    case SET_STORE:
      return state.set('store', action.payload)

    /**
     * ### Get the current state from the store
     *
     * The Redux ```store``` provides the state object.
     * We convert each key to JSON and set it in the state
     *
     * *Note*: the global state removes the ```store```, otherwise,
     * when trying to convert to JSON, it will be recursive and fail
     */
    case GET_STATE:
      const tmpState = state.store.getState()

      if (action.payload) {
        const newState = {}
        newState.auth = tmpState.auth.toJS()
        newState.device = tmpState.device.toJS()

      // Make sure global doesn't have the previous currentState
        // let _noCurrentState =  _state.global.set('currentState',null);
        // let _noStore = _noCurrentState.set('store',null);

        newState.global =  tmpState.global.set('currentState', null).set('store', null).toJS()

        return state.set('showState', action.payload)
                    .set('currentState', newState)
      } else {
        return state.set('showState', action.payload)
      }

    case SET_STATE:
      const global = JSON.parse(action.payload).global
      return state.set('currentUser', global.currentUser)
          .set('showState', false)
          .set('currentState', null)

  }
  return state
}
