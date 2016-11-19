import { StyleSheet } from 'react-native'
import MainStyle from '../../styles'
import { width, height } from '../../lib/dimensions'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainStyle.color.main,
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 50,
    paddingRight: 50,
  },
  backgroundImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    opacity: 0.6,
    width,
    height,
  },
  dpLogoView: {
    height: 200,
    width: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dpLogo: {
    height: 125,
    width: 125,
  },
  dpLogoText: {
    fontSize: MainStyle.font.large + 2,
    color: MainStyle.color.main,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  logoView: {
    height: 160,
    width: 160,
    margin: 25,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'white',
    borderRadius: 50,
  },
  logo: {
    height: 80,
    width: 80,
  },
  logoText: {
    fontSize: MainStyle.font.large,
    color: 'white',
    backgroundColor: 'transparent',
  },
  logoViewBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})
