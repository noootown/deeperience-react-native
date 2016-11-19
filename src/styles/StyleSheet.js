'use strict'

import { StyleSheet as RNStyleSheet, Platform } from 'react-native'

class StyleSheet {
  static create(styles: Object): {[name: string]: number} {
    const platformStyles = {}
    Object.keys(styles).forEach((name) => {
      const { ios, android, ...style } = { ...styles[name] }
      let outputStyle = style
      if (ios && Platform.OS === 'ios') outputStyle = { ...style, ...ios }
      if (android && Platform.OS === 'android') outputStyle = { ...style, ...android }
      platformStyles[name] = outputStyle
    })
    return RNStyleSheet.create(platformStyles)
  }
}

export default StyleSheet
