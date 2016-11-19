/**
 * # mainInitialState.js
 *
 * control states different from auth trip global and device
 *
 */
'use strict'
import { Record } from 'immutable'

const InitialState = Record({
  firstTime: true,
})
export default InitialState

