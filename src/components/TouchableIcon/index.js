'use strict'

import React, { PropTypes } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainStyle from '../../styles'

const TouchableIcon = ({
  name,
  size,
  color,
  activeColor,
  onPress,
  active,
  clickable,
  style,
  textStyle,
  children,
}) => (
  <TouchableOpacity
    style={style}
    onPress={() => onPress()}
    activeOpacity={0.7}
  >
    <View style={{
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
    <Icon
      name={name}
      size={size}
      color={!active ? color : activeColor}
    />
    {children ?
      (<Text style={[
        textStyle,
            { color: active ? activeColor : color },
      ]}>
        {children}
      </Text>) : null}
    </View>
  </TouchableOpacity>
)

TouchableIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
  clickable: PropTypes.bool,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
}
TouchableIcon.defaultProps = {
  name: '',
  size: 20,
  color: 'white',
  activeColor: MainStyle.color.main,
  onPress: () => {},
  active: false,
  clickable: true,
  style: {},
  textStyle: {},
}

export default TouchableIcon
