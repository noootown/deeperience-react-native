/**
 * # TabBar-test.js
 *
 * This class tests that the tabBar displays correctly
 *
 * *Note:* if you want to understand the structures here, add a
 * ```console.log``` and then ```npm test```.
 */
'use strict'
import React from 'react'
import TabBar from '../TabBar'
import renderer from 'react-test-renderer'
import { View } from 'react-native'

describe('<TabBar />', () => {
  const innerView = {
    flex: 1,
  }

  it('render TabBar', () => {
    const view = (
      <TabBar>
        <View
          style={innerView}
          tabLabel="first page"
        />
        <View
          style={innerView}
          tabLabel="Second page"
        />
      </TabBar>)
    const tree = renderer.create(view).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render TabBar with initial page', () => {
    const props = {
      initialPage: 0,
    }

    const view = (
      <TabBar {...props}>
        <View
          style={innerView}
          tabLabel="First page"
        />
        <View
          style={innerView}
          tabLabel="Second page"
        />
      </TabBar>)
    const tree = renderer.create(view).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
