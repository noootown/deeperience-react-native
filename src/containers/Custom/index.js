/**
 * # Custom.js
 *  The container to custom post
 */
'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as customActions from '../../reducers/custom/customActions'
import { Map } from 'immutable'
import React from 'react'
import { ScrollView, View, Text, Image, Platform, TextInput } from 'react-native'
import I18n from '../../lib/i18n'
import styles from './styles'
import MainStyle from '../../styles'
import MultiSlider from 'react-native-multi-slider'
import { width } from '../../lib/dimensions'
import Header from '../../components/Header'
import { Actions } from 'react-native-router-flux'
import ModalPicker from 'react-native-modal-picker'
import { dayData, hotelType, tripLocation, tripElement } from './options'
import ItemCheckbox from '../../components/ItemCheckbox'
import Button from 'react-native-button'
// import { validSubmit } from '../../reducers/custom/customHelper'
// import SimpleAlert from 'react-native-simpledialog-android'

const {
  RESIDENT_FEE,
  TRIP_FEE,
} = require('../../lib/constants').default

const actions = [
  customActions,
]

function mapStateToProps(state) {
  return {
    device: state.device,
    custom: state.custom,
    global: state.global,
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  }
}

class Custom extends React.Component {

  render() {
    return (
      <View style={styles.outerContainer} >
        <Image
          source={require('../../images/city.jpg')}
          style={styles.backgroundImg}
        />
        {this.props.fullMode ? (
          <Header
            headerText={I18n.t('Custom.custom')}
            back={true}
            onReturn={() => Actions.pop()}
          />) : null}
        <View style={styles.container}>
          <ScrollView style={styles.customView}>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.travelDay')}</Text>
              </View>
              {getModelPicker(
                dayData,
                I18n.t('Custom.chooseDay'),
                option => this.props.actions.setDay(option.key))}
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.hotelFee')}</Text>
                <Text style={styles.optionText}>
                  {`${this.props.custom.residentFee[0]} - ${this.props.custom.residentFee[1]}`}
                </Text>
              </View>
              {getMultiSlider(
                [2500, 5000],
                0,
                10000,
                500,
                valuesArray => this.props.actions.setFee(RESIDENT_FEE, valuesArray))}
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.hotelType')}</Text>
              </View>
              {getModelPicker(
                hotelType,
                I18n.t('Custom.chooseHotelType'),
                option => this.props.actions.setHotelType(option.key))}
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.travelFee')}</Text>
                <Text style={styles.optionText}>
                  {`${this.props.custom.tripFee[0]} - ${this.props.custom.tripFee[1]}`}
                </Text>
              </View>
              {getMultiSlider(
                [2500, 5000],
                0,
                10000,
                500,
                valuesArray => this.props.actions.setFee(TRIP_FEE, valuesArray))}
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.travelAllFee')}</Text>
              </View>
              <View style={[styles.optionTextView, { justifyContent: 'center', marginBottom: 0 }]}>
                <Text style={[styles.optionText, { fontSize: MainStyle.font.large }]}>
                  {`${this.props.custom.allFee[0]} - ${this.props.custom.allFee[1]}`}
                </Text>
              </View>
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.tripLocation')}</Text>
              </View>
              {getModelPicker(
                tripLocation,
                I18n.t('Custom.chooseTripLocation'),
                option => this.props.actions.setTripLocation(option.key))}
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.tripElement')}</Text>
              </View>
              <View style={styles.checkboxView}>
                {tripElement.map((element, index) => (
                    <ItemCheckbox
                      style={{ marginRight: 10, height: 30 }}
                      text={element.label}
                      key={`tripElement_${element.key}`}
                      checked={this.props.custom.tripElement[index]}
                      color="white"
                      textStyle={{ fontWeight: 'bold' }}
                      iconViewStyle={this.props.custom.tripElement[index] ?
                                      { backgroundColor: MainStyle.color.weedGreen, borderWidth: 0 } :
                                      null}
                      onCheck={() => {
                        this.props.actions.toggleTripElement(index)
                      }}
                      onUncheck={() => {
                        this.props.actions.toggleTripElement(index)
                      }}
                    />
                  ))}
              </View>
            </View>
            <View style={styles.option}>
              <View style={styles.optionTextView}>
                <Text style={styles.optionText}>{I18n.t('Custom.otherDemand')}</Text>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  multiline={true}
                  selectionColor="white"
                  onChangeText={(text) => this.props.actions.setOtherDemand(text)}
                  value={this.props.otherDemand}
                />
              </View>
            </View>
            <View style={styles.option}>
              <Button
                containerStyle={styles.btnContainer}
                activeOpacity={0.7}
                style={styles.btn}
                onPress={() => {
                  if (!this.props.global.currentUser) {
                    Actions.LoginMain()
                  }
                 // if (validSubmit(this.props.custom)) {
                 //   Actions.LoginMain()
                 // } else {
                 //   SimpleAlert.alert(I18n.t('Custom.advice'), I18n.t('Custom.fillAll'))
                 // }
                }}
              >{I18n.t('Custom.submit')}</Button>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const getModelPicker = (data, initValue, onChange) => (
  <ModalPicker
    data={data}
    style={styles.modalPicker}
    selectTextStyle={styles.MPSelectTextStyle}
    overlayStyle={styles.MPOverlayStyle}
    optionStyle={styles.MPOptionStyle}
    optionTextStyle={styles.MPOptionTextStyle}
    cancelStyle={styles.MPCancelStyle}
    cancelTextStyle={styles.MPCancelTextStyle}
    sectionStyle={styles.MPSectionStyle}
    sectionTextStyle={styles.MPSectionTextStyle}
    cancelText={I18n.t('Custom.cancel')}
    initValue={initValue}
    onChange={onChange} />
)

const getMultiSlider = (values, min, max, step, onValuesChange) => (
  <MultiSlider
    values={values}
    min={min}
    max={max}
    step={step}
    onValuesChange={onValuesChange}
    sliderLength={Platform.OS === 'ios' ? width - 80 : width - 60}
    trackStyle={styles.trackStyle}
    selectedStyle={styles.selectedTrackStyle}
    unselectedStyle={styles.unselectedTrackStyle}
    markerStyle={styles.markerStyle}
    pressedMarkerStyle={styles.pressedMarkerStyle}
    style={styles.slider}
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(Custom)
