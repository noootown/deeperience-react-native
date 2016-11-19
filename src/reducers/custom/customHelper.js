'use strict'

export function validSubmit(state) {
  return state.day !== 0 &&
          state.hotelType !== 0 &&
          state.tripLocation !== 0 &&
          state.tripElement.filter(value => value).length !== 0
}
