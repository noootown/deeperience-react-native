/**
 * # FormButton.js
 *
 * Display a button that responds to onPress and is colored appropriately
 */
'use strict'
import React from 'react'
import Button from 'react-native-button'
import styles from './styles'

const FormButton = ({ isDisabled, buttonText, onPress }) => (
  <Button style={styles.button}
          containerStyle={isDisabled ? styles.disContainer : styles.container}
          disabled={isDisabled}
          onPress={onPress}
          activeOpacity={0.7}
  >
    {buttonText}
  </Button>
)

export default FormButton
