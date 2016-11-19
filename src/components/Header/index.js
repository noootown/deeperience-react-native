'use strict'
import React, { PropTypes } from 'react'
import { Text, View, Platform } from 'react-native'
import styles from './styles'
import TouchableIcon from '../TouchableIcon'
import MainStyle from '../../styles'

const Header = ({
  headerText,
  back,
  onReturn,
  rightIcon,
  rightIconSize,
  rightIconColor,
  rightIconStyle,
  onPress,
  backgroundColor,
}) => (
  <View style={[styles.container, { backgroundColor }]}>
    {Platform.OS === 'ios' ? (
      <View style={styles.iosbar}/>
    ) : null}
    <View style={styles.contentView}>
      {back ? (
        <TouchableIcon
          onPress={() => onReturn()}
          name="chevron-left"
          size={30}
          color="white"
        />) : (
        <TouchableIcon
          onPress={() => {}}
          name="chevron-left"
          size={30}
          color="transparent"/>)}
      <Text style={styles.textStyle}>{headerText}</Text>
      <TouchableIcon
        style={rightIconStyle}
        onPress={() => onPress()}
        name={rightIcon || 'user'}
        size={rightIconSize}
        color={rightIcon === null ? 'transparent' : rightIconColor}
      />
    </View>
  </View>
)

Header.propTypes = {
  headerText: PropTypes.string,
  back: PropTypes.bool,
  onReturn: PropTypes.func,
  rightIcon: PropTypes.string,
  rightIconSize: PropTypes.number,
  rightIconColor: PropTypes.string,
  rightIconStyle: View.propTypes.style,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
}
Header.defaultProps = {
  headerText: '',
  back: true,
  onReturn: () => {},
  rightIcon: null,
  rightIconSize: 30,
  rightIconColor: 'white',
  rightIconStyle: {},
  onPress: () => {},
  backgroundColor: MainStyle.color.main,
}

export default Header
