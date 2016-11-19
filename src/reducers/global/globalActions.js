// @flow weak
/**
 * # globalActions.js
 *
 * Actions that are global in nature
 */
'use strict'

const {
  SET_STORE,
  SET_STATE,
  GET_STATE,
} = require('../../lib/constants').default

/**
 * ## set the store
 * this is the Redux store
 * this is here to support Hot Loading
 */
export function setStore(store:any) {
  return {
    type: SET_STORE,
    payload: store,
  }
}

export function setState(newState:any) {
  return {
    type: SET_STATE,
    payload: newState,
  }
}

export function getState(toggle:any) {
  return {
    type: GET_STATE,
    payload: toggle,
  }
}
