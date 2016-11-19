'use strict'
import React, { PropTypes } from 'react'
import { Text, View, NativeModules, TouchableOpacity } from 'react-native'
import I18n from '../../lib/i18n'
import MainStyle from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const FBLoginManager = NativeModules.MFBLoginManager

class FBLogin extends React.Component {
  static propTypes = {
    style: View.propTypes.style,
    onPress: PropTypes.func,
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
  }

  handleLogin() {
    FBLoginManager.loginWithPermissions(this.props.permissions, (error, data) => {
      if (!error) this.props.onLogin && this.props.onLogin(data)
      else console.log(error, data)
    })
  }

  handleLogout() {
    FBLoginManager.logout((error, data) => {
      if (!error) this.props.onLogout && this.props.onLogout()
      else console.log(error, data)
    })
  }

  onPress() {
    this.props.loginOrNot ?
      this.handleLogout() :
      this.handleLogin()

    this.props.onPress && this.props.onPress()
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.btn, styles.fbBtn]}
        onPress={() => this.onPress()}
      >
        <View style={styles.fbBtnInnerView}>
          <Icon
            name="facebook"
            size={18}
            color={MainStyle.color.main}
            style={styles.icon}
          />
          <Text style={[styles.btnText, styles.fbBtnText]}>{I18n.t('LoginMain.facebookLogin')}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

module.exports = { FBLogin, FBLoginManager }
