/**
 * # LoginRegisterRender.js
 *
 * To render all kinds of form
 *
 */
'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../reducers/auth/authActions'
import * as globalActions from '../../reducers/global/globalActions'
import { Map } from 'immutable'
import { Actions } from 'react-native-router-flux'
import FormButton from '../FormButton'
import LoginForm from '../LoginForm'
import ItemCheckbox from '../ItemCheckbox'
import Header from '../Header'
import React from 'react'
import { Text, View } from 'react-native'
import I18n from '../../lib/i18n'
import styles from './styles'
import Button from 'react-native-button'

const actions = [
  authActions,
  globalActions,
]

const {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
} = require('../../lib/constants').default

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  }
}

function mapStateToProps(state) {
  return {
    auth: {
      checked: state.auth.itemboxChecked,
      form: state.auth.form,
    },
  }
}

class LoginRegisterRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        username: this.props.auth.form.fields.username,
        email: this.props.auth.form.fields.email,
        password: this.props.auth.form.fields.password,
        passwordAgain: this.props.auth.form.fields.passwordAgain,
      },
    }
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      value: {
        username: nextprops.auth.form.fields.username,
        email: nextprops.auth.form.fields.email,
        password: nextprops.auth.form.fields.password,
        passwordAgain: nextprops.auth.form.fields.passwordAgain,
      },
    })
  }

  componentWillMount() {
    this.props.dispatch({ type: this.props.formType }) // set form type and state
  }

  /**
   * ### onChange
   *
   * As the user enters keys, this is called for each key stroke.
   * Rather then publish the rules for each of the fields, I find it
   * better to display the rules required as long as the field doesn't
   * meet the requirements.
   * *Note* that the fields are validated by the authReducer
   */
  onChange(value) {
    if (value.username !== '') {
      this.props.actions.onAuthFormFieldChange('username', value.username)
    }
    if (value.email !== '') {
      this.props.actions.onAuthFormFieldChange('email', value.email)
    }
    if (value.password !== '') {
      this.props.actions.onAuthFormFieldChange('password', value.password)
    }
    if (value.passwordAgain !== '') {
      this.props.actions.onAuthFormFieldChange('passwordAgain', value.passwordAgain)
    }
    this.setState(
      { value }
    )
  }

  render() {
    /**
     * The LoginForm is now defined with the required fields.  Just
     * surround it with the Header and the navigation messages
     * Note how the button too is disabled if we're fetching. The
     * header props are mostly for support of Hot reloading.
     * See the docs for Header for more info.
     */

    return (
      <View style={styles.container}>
        <Header
          onReturn={() => Actions.pop()}
        />
        <View style={styles.innerContainer}>
          {this.props.formType === FORGOT_PASSWORD ? (
            <Text style={styles.title}>
              {I18n.t('LoginRenderRegister.explore')}
            </Text>
            ) : (
            <Text style={styles.title}>
              {I18n.t('LoginRenderRegister.explore')}
            </Text>)
          }
          <View>
            <LoginForm
              formType={this.props.formType}
              form={this.props.auth.form}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
            />
            {this.props.formType === LOGIN || this.props.formType === REGISTER ?
              (<ItemCheckbox
                style={{ marginTop: 5 }}
                text={I18n.t('LoginRenderRegister.showPassword')}
                disabled={this.props.auth.form.isFetching}
                checked={this.props.auth.checked}
                onCheck={() => {
                  this.props.actions.toggleItemboxChecked()
                  this.props.actions.onAuthFormFieldChange('showPassword', true)
                }}
                onUncheck={() => {
                  this.props.actions.toggleItemboxChecked()
                  this.props.actions.onAuthFormFieldChange('showPassword', false)
                }}
              />) : null}
            {this.props.formType === LOGIN ? (
                <View style={styles.forgotPasswordView}>
                  <Button
                    onPress={() => {
                      this.props.actions.resetForm()
                      Actions.LoginRegister({ formType: FORGOT_PASSWORD })
                    }}
                    style={styles.forgotPassword}>
                    {I18n.t('LoginRenderRegister.forgotPassword')}
                  </Button>
                </View>
              ) : null}
          </View>
          <FormButton
            isDisabled={!this.props.auth.form.isValid || this.props.auth.form.isFetching}
            onPress={this.props.onButtonPress}
            buttonText={this.props.buttonText}
          />
        </View>
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterRender)
