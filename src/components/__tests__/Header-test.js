'use strict'
import React from 'react'
import Header from '../Header'
import renderer from 'react-test-renderer'

describe('<Header />', () => {
  it('render if headText is empty', () => {
    const props = {
      headerText: '',
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render if headText is not empty', () => {
    const props = {
      headerText: 'test',
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('have return button', () => {
    const props = {
      headerText: 'Header',
      onReturn: () => {},
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('no return button', () => {
    const props = {
      headerText: 'Header',
      back: false,
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('have right button', () => {
    const props = {
      headerText: 'Header',
      onReturn: () => {},
      rightIcon: 'check',
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('set right button size', () => {
    const props = {
      headerText: 'Header',
      onReturn: () => {},
      rightIcon: 'check',
      rightIconSize: 20,
    }
    const tree = renderer.create(<Header {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
