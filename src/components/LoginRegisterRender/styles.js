import { StyleSheet } from 'react-native'
import MainStyle from '../../styles'

export default StyleSheet.create({
  container: {
    ...MainStyle.container,
    backgroundColor: MainStyle.color.main,
  },
  innerContainer: {
    padding: 30,
  },
  title: {
    fontSize: MainStyle.font.large,
    color: 'white',
    marginBottom: 20,
  },
  forgotPassword: {
    color: 'black',
    fontSize: MainStyle.font.medium - 1,
    fontWeight: 'normal',
  },
  forgotPasswordView: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
})
