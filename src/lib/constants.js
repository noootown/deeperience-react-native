import keyMirror from 'key-mirror'

export default keyMirror({

  // ----------device----------
  SET_PLATFORM: null,
  SET_VERSION: null,

  // ----------global----------
  SET_STATE: null,
  GET_STATE: null,
  SET_STORE: null,

  // ----------auth----------
  ON_LOGIN_STATE_CHANGE: null,
  ON_AUTH_FORM_FIELD_CHANGE: null,

  INIT_AUTH: null,

  SIGNUP_START: null,
  SIGNUP_REQUEST: null,
  SIGNUP_SUCCESS: null,
  SIGNUP_FAILURE: null,

  // LOGOUT, REGISTER, LOGIN just status of view
  // for example , when you send LOGOUT action
  // the form's state that user input will be diminished.
  LOGOUT: null,
  REGISTER: null,
  LOGIN: null,
  FORGOT_PASSWORD: null,

  LOGIN_START: null,
  LOGIN_REQUEST: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null,
  LOGIN_SOCIAL: null,

  LOGOUT_START: null,
  LOGOUT_REQUEST: null,
  LOGOUT_SUCCESS: null,
  LOGOUT_FAILURE: null,

  LOGGED_IN: null,
  LOGGED_OUT: null,

  RESET_PASSWORD_START: null,
  RESET_PASSWORD_REQUEST: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILURE: null,

  TOGGLE_ITEMBOX_CHECKED: null,

  RESET_FORM: null,

  FB_LOGIN_START: null,

  // ----------main---------
  LOAD_APP: null,

  SET_FIRST_TIME: null,

  // ----------custom---------
  SET_FEE: null,
  SET_DAY: null,
  SET_HOTEL_TYPE: null,
  SET_TRIP_LOCATION: null,
  SET_TRIP_ELEMENT: null,
  TOGGLE_TRIP_ELEMENT: null,
  SET_OTHER_DEMAND: null,
  RESET_CUSTOM: null,

  RESIDENT_FEE: null,
  TRIP_FEE: null,
})
