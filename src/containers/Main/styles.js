import { StyleSheet } from 'react-native'
import MainStyle from '../../styles'

export default (StyleSheet.create({
  container: MainStyle.container,
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366',
    marginLeft: 10,
    marginRight: 10,
  },
  innerView: {
    flex: 1,
  },
}))
