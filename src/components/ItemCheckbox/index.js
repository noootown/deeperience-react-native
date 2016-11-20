/**
 * # ItemCheckbox.js
 *
 * This class was initially written by
 * https://github.com/mhollweck/react-native-item-checkbox
 *
 * I've opened an issue to attempt to merge this back in
 */
'use strict'

import React, { PropTypes } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ItemCheckbox = ({
  onCheck,
  onUncheck,
  iconCheck,
  backgroundColor,
  iconSize,
  color,
  checked,
  style,
  text,
  disabled,
  textStyle,
  iconViewStyle,
}) => (
  <View style={style}>
    <TouchableWithoutFeedback
      onPress={disabled ?
                null :
                  checked ?
                    onUncheck :
                    onCheck}
    >
      <View style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}>
        <View
          style={[
            {
              height: 16,
              width: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 2,
            },
            { borderColor: color,
              backgroundColor },
            iconViewStyle,
          ]}>
          {checked ? (
            <Icon
              name={iconCheck}
              size={iconSize}
              color={color}
            />
          ) : null}
        </View>
        <Text
          style={{ color,
            marginLeft: 5,
            fontSize: iconSize + 1 }}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
)

ItemCheckbox.propTypes = {
  onCheck: PropTypes.func,
  onUncheck: PropTypes.func,
  iconCheck: PropTypes.string,
  backgroundColor: PropTypes.string,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  checked: PropTypes.bool,
  style: View.propTypes.style,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  textStyle: Text.propTypes.style,
  iconViewStyle: View.propTypes.style,
}

ItemCheckbox.defaultProps = {
  onCheck: () => {},
  onUncheck: () => {},
  iconCheck: 'check',
  backgroundColor: 'transparent',
  iconSize: 14,
  color: 'black',
  checked: false,
  style: {},
  text: '',
  disabled: false,
  textStyle: {},
  iconViewStyle: {},
}

export default ItemCheckbox
