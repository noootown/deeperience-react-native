import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'
import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window') // Screen dimensions in current orientation

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    ios: {
      padding: 10,
      paddingTop: 20,
    },
    android: {
      padding: 7,
    },
  },
  iosbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 14,
    width,
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  textStyle: {
    fontSize: MainStyle.font.big,
    color: '#ffffff',
    fontWeight: 'bold',
  },
})
