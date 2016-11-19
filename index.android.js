'use strict'

import index from './src/index'
import Reactotron from 'reactotron-react-native'
Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!
index('android')


