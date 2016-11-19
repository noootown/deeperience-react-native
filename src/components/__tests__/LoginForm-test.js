/**
 * # LoginForm-test.js
 *
 * This class tests that the LoginForm renders correctly under
 * 4 states of the Login component, namely, logging in,
 * resetting the password and registration
 *
 * *Note:* if you want to understand the structures here, add a
 * ```console.log``` and then ```npm test```.
 *
 */

'use strict'
import React from 'react'
import LoginForm from '../LoginForm'
import renderer from 'react-test-renderer'

jest.mock('tcomb-form-native', () => {
  const React = require('React')
  const t = require.requireActual('tcomb-form-native')
  // Patch the base Component class to make rendering possible.
  t.form.Component.prototype.render = function() {
    return React.createElement(this.getTemplate().name, this.props)
  }
  return t
})

const {
  REGISTER,
  LOGIN,
  FORGOT_PASSWORD,
} = require('../../lib/constants').default

describe('LoginForm', () => {
  /**
   * ### snapshotForm
   *
   * Depending on the state, this function validates that the rendered
   * component has the correct data
   */
  function snapshotForm(props) {
    const tree = renderer.create(<LoginForm {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  }
  /**
   * ## Test Registration
   */
  describe('REGISTER', () => {
    /**
     * ### it should display without errors and without value
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display without errors and without values', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: false,
          emailHasError: false,
          passwordHasError: false,
          passwordAgainHasError: false,
          showPassword: false,
        },
      }

      const value = {
        username: '',
        email: '',
        password: '',
        passwordAgain: '',
      }

      const props = {
        form,
        formType: REGISTER,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### it should display  errors and  value
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display  errors and  values', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: true,
          emailHasError: true,
          passwordHasError: true,
          passwordAgainHasError: true,
          showPassword: false,
        },
      }

      const value = {
        username: 'username',
        email: 'email',
        password: 'password',
        passwordAgain: 'passwordagain',
      }

      const props = {
        form,
        formType: REGISTER,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### it should not be editable if fetching
     * change the props and call ```snapshotForm``` to validate
     */
    it('should not be editable if fetching', () => {
      const form = {
        isFetching: true,
        fields: {
          usernameHasError: true,
          emailHasError: true,
          passwordHasError: true,
          passwordAgainHasError: true,
          showPassword: false,
        },
      }

      const value = {
        username: 'username',
        email: 'email',
        password: 'password',
        passwordAgain: 'passwordagain',
      }

      const props = {
        form,
        formType: REGISTER,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### the password fields are not secured if shown
     * change the props and call ```snapshotForm``` to validate
     */
    it('password fields are not secured if shown', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: false,
          emailHasError: false,
          passwordHasError: false,
          passwordAgainHasError: false,
          showPassword: true,
        },
      }

      const value = {
        username: 'username',
        email: 'email',
        password: 'password',
        passwordAgain: 'passwordagain',
      }

      const props = {
        form,
        formType: REGISTER,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
  })

  /**
   * ## Test Log in
   */
  describe('LOGIN', () => {
    /**
     * ### it should display without errors and without value
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display without errors and without values', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: false,
          passwordHasError: false,
          showPassword: false,
        },
      }

      const value = {
        username: '',
        password: '',
      }

      const props = {
        form,
        formType: LOGIN,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### it should display  errors and  values
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display  errors and  values', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: true,
          passwordHasError: true,
        },
      }

      const value = {
        username: 'username',
        password: 'password',
      }

      const props = {
        form,
        formType: LOGIN,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### it should not be editable if fetching
     * change the props and call ```snapshotForm``` to validate
     */
    it('should not be editable if fetching', () => {
      const form = {
        isFetching: true,
        fields: {
          usernameHasError: true,
          passwordHasError: true,
          showPassword: false,
        },
      }

      const value = {
        username: 'username',
        password: 'password',
      }

      const props = {
        form,
        formType: LOGIN,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### password fields are not secured if shown
     * change the props and call ```snapshotForm``` to validate
     */
    it('password fields are not secured if shown', () => {
      const form = {
        isFetching: false,
        fields: {
          usernameHasError: false,
          passwordHasError: false,
          showPassword: true,
        },
      }

      const value = {
        username: 'username',
        password: 'password',
      }

      const props = {
        form,
        formType: LOGIN,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
  })
  /**
   * ## Test reset password
   */
  describe('FORGOT_PASSWORD', () => {
    /**
     * ### it should display without errors and without values
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display without errors and without values', () => {
      const form = {
        isFetching: false,
        fields: {
          emailHasError: false,
          showPassword: false,
        },
      }

      const value = {
        email: '',
      }

      const props = {
        form,
        formType: FORGOT_PASSWORD,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
    /**
     * ### register password fields are not secured if shown
     * change the props and call ```snapshotForm``` to validate
     */
    it('should display  errors and  values', () => {
      const form = {
        isFetching: false,
        fields: {
          emailHasError: true,
        },
      }

      const value = {
        email: 'email',
      }

      const props = {
        form,
        formType: FORGOT_PASSWORD,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })

    /**
     * ### it should not be editable if fetching
     * change the props and call ```snapshotForm``` to validate
     */
    it('should not be editable if fetching', () => {
      const form = {
        isFetching: true,
        fields: {
          emailHasError: true,
          showPassword: false,
        },
      }

      const value = {
        username: 'username',
        password: 'password',
      }

      const props = {
        form,
        formType: LOGIN,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })

    /**
     * ### password fields are not secured if shown
     * change the props and call ```snapshotForm``` to validate
     */
    it('password fields are not secured if shown', () => {
      const form = {
        isFetching: false,
        fields: {
          emailHasError: false,
          showPassword: true,
        },
      }

      const value = {
        email: 'email',
      }

      const props = {
        form,
        formType: FORGOT_PASSWORD,
        value,
        onChange: () => {},
      }

      snapshotForm(props)
    })
  })
})// describe LoginFormTest
