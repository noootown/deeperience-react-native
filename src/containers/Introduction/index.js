/**
 * # Introduction.js
 *
 *  The container to custom post
 *
 */
'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import React from 'react'
import { View, Image, Text } from 'react-native'
import I18n from '../../lib/i18n'
import styles from './styles'
import AppIntro from '../../components/AppIntro'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import * as customActions from '../../reducers/custom/customActions'

const actions = [
  customActions,
]

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

class Introduction extends React.Component {

  render() {
    return (
      <AppIntro
        nextBtnLabel={I18n.t('Introduction.nextBtn')}
        skipBtnLabel={I18n.t('Introduction.skipBtn')}
        doneBtnLabel={I18n.t('Introduction.doneBtn')}
        defaultIndex={0}
      >
        <View style={[styles.slide, { backgroundColor: '#F88B6D' }]}>
          <View style={styles.imageView} level={10}>
            <Image style={styles.image} source={require('../../images/dpLogoWhiteTransparent.png')}/>
          </View>
          <View style={styles.titleView} level={10}>
            <Text style={styles.title}>{I18n.t('Introduction.title1')}</Text>
          </View>
          <View style={styles.textView} level={10}>
            <View>
              <Text style={styles.text}>{I18n.t('Introduction.text1')}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.slide, { backgroundColor: '#12A5DB' }]}>
          <View style={styles.imageView} level={10}>
            <Image style={styles.image} source={require('../../images/dpLogoWhiteTransparent.png')}/>
          </View>
          <View level={10}>
            <Text style={styles.title}>{I18n.t('Introduction.title2')}</Text>
          </View>
          <View level={10}>
            <Text style={styles.text}>{I18n.t('Introduction.text2')}</Text>
          </View>
        </View>

        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View style={styles.imageView} level={10}>
            <Image style={styles.image} source={require('../../images/dpLogoWhiteTransparent.png')}/>
          </View>
          <View level={10}>
            <Text style={styles.title}>{I18n.t('Introduction.title3')}</Text>
          </View>
          <View level={10}>
            <Text style={styles.text}>{I18n.t('Introduction.text3')}</Text>
          </View>
        </View>

        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View style={styles.imageView} level={10}>
            <Image style={styles.image} source={require('../../images/dpLogoWhiteTransparent.png')}/>
          </View>
          <View level={10}>
            <Text style={styles.title}>{I18n.t('Introduction.title4')}</Text>
          </View>
          <View level={10}>
            <Text style={styles.text}>{I18n.t('Introduction.text4')}</Text>
          </View>
          <View style={styles.buttonView}>
            <View>
              <Button
                onPress={() => {
                  this.props.actions.resetCustom()
                  Actions.Custom({ fullMode: true })
                }}
                containerStyle={[styles.btnContainerStyle, { backgroundColor: '#12A5DB' }]}
                style={styles.btnStyle}
              >
                {I18n.t('Introduction.custom')}
              </Button>
            </View>
            <View>
              <Button
                onPress={() => {
                  Actions.LoginMain({ back: true })
                }}
                containerStyle={styles.btnContainerStyle}
                style={styles.btnStyle}
              >
                {I18n.t('Introduction.loginRegister')}
              </Button>
            </View>
          </View>
        </View>
      </AppIntro>
    )
  }
}

export default connect(null, mapDispatchToProps)(Introduction)
