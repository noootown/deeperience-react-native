// @flow weak
'use strict'

const {
  SET_FEE,
  SET_DAY,
  SET_HOTEL_TYPE,
  SET_TRIP_LOCATION,
  SET_TRIP_ELEMENT,
  TOGGLE_TRIP_ELEMENT,
  SET_OTHER_DEMAND,
  RESET_CUSTOM,
} = require('../../lib/constants').default

export function setFee(type: string, fee: [number, number]) {
  return {
    type: SET_FEE,
    payload: {
      type,
      fee,
    },
  }
}

export function setDay(day: number) {
  return {
    type: SET_DAY,
    payload: {
      day,
    },
  }
}

export function setHotelType(type: number) {
  return {
    type: SET_HOTEL_TYPE,
    payload: {
      type,
    },
  }
}

export function setTripLocation(tripLocation: number) {
  return {
    type: SET_TRIP_LOCATION,
    payload: {
      tripLocation,
    },
  }
}

export function setTripElement(tripElement: any) {
  return {
    type: SET_TRIP_ELEMENT,
    payload: {
      tripElement,
    },
  }
}

export function toggleTripElement(tripElementIndex: number) {
  return {
    type: TOGGLE_TRIP_ELEMENT,
    payload: {
      tripElementIndex,
    },
  }
}

export function setOtherDemand(otherDemand: string) {
  return {
    type: SET_OTHER_DEMAND,
    payload: {
      otherDemand,
    },
  }
}

export function resetCustom() {
  return {
    type: RESET_CUSTOM,
  }
}

