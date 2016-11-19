/**
 * # mainReducer.js
 *
 * The reducer for controling app flow
 */
'use strict'
import InitialState from './mainInitialState'

const {
  SET_STATE,

  SET_FIRST_TIME,
} = require('../../lib/constants').default

const initialState = new InitialState()

export default function authReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {

    case SET_FIRST_TIME:
      return state.setIn(['firstTime'], false)

    case SET_STATE:
      return state
  }
  return state
}
