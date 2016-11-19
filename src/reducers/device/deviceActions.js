// @flow weak
/**
 * # deviceActions.js
 *
 * What platform are we running on, ie ```ios``` or ```android```
 *
 * What version is the app?
 *
 */
'use strict'

const {
  SET_PLATFORM,
  SET_VERSION,
} = require('../../lib/constants').default

/**
 * ## Set the platformState
 *
 */
export function setPlatform(platform:string) {
  return {
    type: SET_PLATFORM,
    payload: platform,
  }
}
/**
 * ## set the version
 *
 */
export function setVersion(version:string) {
  return {
    type: SET_VERSION,
    payload: version,
  }
}
