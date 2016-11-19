import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'
import { width, height } from '../../lib/dimensions'

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,0.7)',
    opacity: 0.85,
    padding: 20,
  },
  centerContainer: {
    alignItems: 'center',
  },
  innerView: {
    alignItems: 'center',
    height: height - 90,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  backgroundImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    opacity: 1,
    width,
    height,
  },
  title: {
    color: MainStyle.color.main,
    fontSize: MainStyle.font.big + 2,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    ios: {
      marginTop: 8,
    },
    android: {
      marginTop: 3,
    },
    fontWeight: 'bold',
  },
  customView: {
    backgroundColor: 'rgba(77,93,112,1)',
    padding: 20,
  },
  option: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  optionTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  optionText: {
    color: 'white',
    fontSize: MainStyle.font.medium + 2,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  trackStyle: {
    height: 4,
    borderRadius: 2,
  },
  selectedTrackStyle: {
    backgroundColor: MainStyle.color.weedGreen,
  },
  unselectedTrackStyle: {
    backgroundColor: '#ccc',
  },
  markerStyle: {
    backgroundColor: MainStyle.color.weedGreen,
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  pressedMarkerStyle: {
    backgroundColor: MainStyle.color.main,
  },
  modalPicker: {
    marginTop: 10,
    marginBottom: 5,
  },
  MPSelectTextStyle: {
    color: 'white',
    fontSize: MainStyle.font.medium + 2,
  },
  MPOverlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  MPOptionStyle: {
    padding: 12,
    borderBottomWidth: 0.75,
    borderBottomColor: '#aaa',
  },
  MPOptionTextStyle: {
    fontSize: MainStyle.font.medium + 2,
  },
  MPCancelTextStyle: {
    color: 'black',
    fontSize: MainStyle.font.medium + 2,
  },
  MPCancelStyle: {
    padding: 10,
  },
  MPSectionTextStyle: {
    color: 'black',
    fontSize: MainStyle.font.medium + 4,
    fontWeight: 'bold',
  },
  MPSectionStyle: {
    padding: 16,
    borderBottomWidth: 0.75,
    borderBottomColor: '#aaa',
  },
  checkboxView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  textInputView: {
    height: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: MainStyle.font.medium,
    color: MainStyle.color.main,
    fontWeight: 'bold',
  },
  btn: {
    color: 'white',
    fontSize: MainStyle.font.big,
  },
  btnContainer: {
    height: 40,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
