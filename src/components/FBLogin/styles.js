import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'

export default StyleSheet.create({
  btn: {
    padding: 5,
    height: 42,
    alignSelf: 'stretch',
    borderRadius: 21,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'white',
  },
  fbBtn: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  fbBtnInnerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    backgroundColor: 'transparent',
  },
  btnText: {
    flex: 1,
    fontSize: MainStyle.font.medium + 2,
    textAlign: 'center',
    justifyContent: 'center',
  },
  fbBtnText: {
    color: MainStyle.color.main,
  },
})
