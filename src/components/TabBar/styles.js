import { StyleSheet } from 'react-native'
import MainStyle from '../../styles'

export default StyleSheet.create({
  tabStyle: {
    paddingTop: 7,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: MainStyle.color.main,
  },
  underline: {
    backgroundColor: MainStyle.color.main,
  },
  text: {
    fontSize: MainStyle.font.medium,
  },
})
