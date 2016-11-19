/**
 * # LoginMain.js
 *
 *  The container to display every Login form
 *
 */
'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../reducers/auth/authActions'
import { Map } from 'immutable'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import I18n from '../../lib/i18n'

const actions = [
  authActions,
]

function mapStateToProps(state) {
  return {
    auth: state.auth,
    global: {
      currentUser: state.global.currentUser,
    },
  }
}

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

class LoginMain extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>username:</Text>
        <Text>{this.props.global.currentUser.username}</Text>
        <Text>email:</Text>
        <Text>{this.props.global.currentUser.email}</Text>
        <Text>uid:</Text>
        <Text>{this.props.global.currentUser.uid}</Text>
        <Text>avatar:</Text>
        <Text>{this.props.global.currentUser.avatar}</Text>
        <TouchableOpacity
          onPress={() => this.props.actions.logout()}
          style={[styles.btn, styles.normalBtn]}
          underlayColor="transparent"
          activeOpacity={0.7}
        >
          <Text style={[styles.btnText, styles.normalBtnText]}>{I18n.t('Setting.logout')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginMain)
