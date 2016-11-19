/**
 * # deviceReducer-test.js
 *
 * Test the deviceReducer's only function, like all reducers, where the
 * state and action are passed in.
 *
 * This will confirm that given a specific action with a type and
 * payload, that the state object is modified accordingly.
 *
 * *Note*: in this app,```state``` is an Immutable.js object
 *
 */
'use strict'

jest.autoMockOff()
const {
  SET_PLATFORM,
  SET_VERSION,
  SET_STATE,
} = require('../../../lib/constants').default

const  deviceReducer = require('../deviceReducer').default

/**
 * ## Tests
 *
 * deviceReducer
 */
describe('deviceReducer', () => {
  describe('init', () => {
    let initialState = null

    beforeEach(() => {
      const action = {
        type: 'dummy',
      }
      initialState = deviceReducer(undefined, action)
    })

    it('sets platform to an empty string', () => {
      expect(initialState.platform).toEqual('')
    })

    it('sets version to null', () => {
      expect(initialState.version).toBeNull()
    })
  })

  describe('SET_PLATFORM', () => {
    it('modifies the platform and returns a new state', () => {
      const platform = 'ios'

      const action = {
        type: SET_PLATFORM,
        payload: platform,
      }

      const next = deviceReducer(undefined, action)

      expect(next.platform).toEqual(platform)
    })
  })

  describe('SET_VERSION', () => {
    it('modifies the version and returns a new state', () => {
      const version = '0.0.8'

      const action = {
        type: SET_VERSION,
        payload: version,
      }

      const next = deviceReducer(undefined, action)
      expect(next.version).toEqual(version)
    })
  })

  describe('SET_STATE', () => {
    let initialState = null

    beforeEach(() => {
      const action = {
        type: 'dummy',
      }
      initialState = deviceReducer(undefined, action)
    })
    it('whould return state', () => {
      const action = {
        type: SET_STATE,
        payload: 'asdasd',
      }

      const next = deviceReducer(initialState, action)
      expect(next).toEqual(initialState)
    })
  })
})

