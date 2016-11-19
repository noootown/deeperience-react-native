import { StyleSheet } from 'react-native'
import MainStyle from '../../styles'

export default StyleSheet.create({
  container: {
    padding: 5,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  disContainer: {
    padding: 5,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: MainStyle.color.mainDisabled,
    backgroundColor: MainStyle.color.mainDisabled,
  },
  button: {
    color: MainStyle.color.main,
    backgroundColor: 'transparent',
  },
})
