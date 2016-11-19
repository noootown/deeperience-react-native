/**
 * # deviceInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
const { Record } = require('immutable')

const InitialState = Record({
  isMobile: true,
  platform: '',
  version: null,
})

export default InitialState
