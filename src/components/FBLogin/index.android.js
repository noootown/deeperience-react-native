import React, {
  PropTypes,
  Component,
} from 'react'

import {
  View,
  Text,
  NativeModules,
  TouchableOpacity,
} from 'react-native'
import I18n from '../../lib/i18n'
import MainStyle from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import itypeof from 'itypeof'

const FBLoginManager = NativeModules.MFBLoginManager

const statics = {
  loginText: 'Login with Facebook',
  logoutText: 'Logout from Facebook',
}

class FBLogin extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
    this.getChildContext = this.getChildContext.bind(this)
    this.onFacebookPress = this.onFacebookPress.bind(this)

    this.state = {
      statics,
      isLoggedIn: false,
      buttonText: statics.loginText,
    }
  }

  componentDidMount() {
    FBLoginManager.setLoginBehavior(this.props.loginBehavior)
    FBLoginManager.getCredentials((data) => {
      if (data &&
        itypeof(data.credentials) === 'object' &&
        itypeof(data.credentials.token) === 'string' &&
        data.credentials.token.length > 0) {
        this.setState({ isLoggedIn: true, buttonText: this.state.statics.logoutText })
      } else {
        this.setState({ isLoggedIn: false, buttonText: this.state.statics.loginText })
      }
      this.handleEvent(null, data)
    })
  }

  static childContextTypes = {
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
    props: PropTypes.object,
  }

  getChildContext() {
    return {
      isLoggedIn: this.state.isLoggedIn,
      login: this.login,
      logout: this.logout,
      props: this.props,
    }
  }

  login(permissions) {
    FBLoginManager.loginWithPermissions(
      permissions || this.props.permissions,
      (err, data) => this.handleEvent(err, data)
    )
  }

  logout() {
    FBLoginManager.logout((err, data) => this.handleEvent(err, data))
  }

  handleEvent(e, data) {
    const result = e || data

    if (result.type === 'success' && result.profile) {
      try {
        result.profile = JSON.parse(result.profile)
      } catch (err) {
        console.warn('Could not parse facebook profile: ', result.profile)
        console.error(err)
      }
    }

    if (result.eventName === 'onLogin' || result.eventName === 'onLoginFound') {
      this.setState({ isLoggedIn: true, buttonText: this.state.statics.logoutText })
    } else if (result.eventName === 'onLogout') {
      this.setState({ isLoggedIn: false, buttonText: this.state.statics.loginText })
    }

    if (result.eventName && this.props.hasOwnProperty(result.eventName)) {
      const event = result.eventName
      delete result.eventName
      console.log('Triggering \'%s\' event', event)
      this.props[event](result)
    } else {
      console.log('\'%s\' Event is not defined or recognized', result.eventName)
    }
  }

  onFacebookPress() {
    let permissions = []
    if (itypeof(this.props.permissions) === 'array') {
      permissions = this.props.permissions
    }

    if (this.state.isLoggedIn) {
      this.logout()
    } else {
      this.login(permissions)
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.onFacebookPress} >
        <View style={[styles.btn, styles.fbBtn]}>
          <View style={styles.fbBtnInnerView}>
            <Icon
              name="facebook"
              size={18}
              color={MainStyle.color.main}
              style={styles.icon}
            />
            <Text style={[styles.btnText, styles.fbBtnText]}>{I18n.t('LoginMain.facebookLogin')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

module.exports =  { FBLogin, FBLoginManager }
