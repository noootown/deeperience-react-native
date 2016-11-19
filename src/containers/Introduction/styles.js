import MainStyle from '../../styles'
import StyleSheet from '../../styles/StyleSheet'

export default StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },
  imageView: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flex: 1,
  },
  textView: {
    flex: 3,
  },
  image: {
    height: 150,
    width: 150,
  },
  title: {
    textAlign: 'center',
    lineHeight: 80,
    color: '#ffffff',
    fontSize: MainStyle.font.large,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    lineHeight: 30,
    color: '#ffffff',
    fontSize: MainStyle.font.big,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnContainerStyle: {
    marginTop: 20,
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  btnStyle: {
    color: 'white',
  },
})
