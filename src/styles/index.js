import style from './origin'
import { StyleSheet, Image } from 'react-native'
import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window') // Screen dimensions in current orientation

export default {
  ...style,
  container: {
    flexDirection: 'column',
    flex: 1,
  },
}

export const HTMLStyle = StyleSheet.create({
  img: {
    resizeMode: Image.resizeMode.contain,
    margin: 0,
    padding: 0,
  },
  imgWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },
  p: {
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 18,
  },
  pwrapper: {
    marginTop: 6,
    marginBottom: 20,
  },
  h6: {
    fontSize: 14,
    textAlign: 'center',
    width,
    justifyContent: 'center',
  },
  h6wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 12,
  },
  h5: {
    fontSize: 18,
    color: 'black',
  },
  h5wrapper: {
    marginTop: 0,
    marginBottom: 12,
  },
})
