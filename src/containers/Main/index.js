'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../reducers/auth/authActions'
import * as globalActions from '../../reducers/global/globalActions'
import { Map } from 'immutable'
// import { Actions } from 'react-native-router-flux'
import React, { Component } from 'react'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import Setting from '../Setting'
import Custom from '../Custom'
import { View } from 'react-native'
import I18n from '../../lib/i18n'
import styles from './styles'

const actions = [
  authActions,
  globalActions,
]

function mapStateToProps(state) {
  return {
    auth: {
      form: {
        isFetching: state.auth.form.isFetching,
      },
    },
    global: {
      currentUser: state.global.currentUser,
      showState: state.global.showState,
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

class Main extends Component {

  componentWillMount() {
    this.props.actions.initAuth()
  }

  render() {
    if (this.props.global.currentUser === null) {
      return (
        <View style={styles.container}>
          <Custom/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Header
          headerText={I18n.t('Nav.mainPage')}
          back={false}
        />
        <TabBar initialPage={this.props.initialPage}>
          <View
            style={styles.innerView}
            tabLabel={I18n.t('Nav.custom')}
          >
            <Custom/>
          </View>
          <View
            style={styles.innerView}
            tabLabel={I18n.t('Nav.purchased')}
          />
          <View
            style={styles.innerView}
            tabLabel={I18n.t('Nav.setting')}
          >
            <Setting/>
          </View>
        </TabBar>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
