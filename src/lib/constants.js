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

  // ----------trip----------
  GET_ALL_TRIP: null,
  GET_ALL_TRIP_SUCCESS: null,
  GET_ALL_TRIP_FAILURE: null,
  GET_TRIP_BY_CLASS: null,

  SET_TRIP_KEY: null,

  GET_TRIP_CONTENT: null,
  GET_TRIP_CONTENT_SUCCESS: null,
  GET_TRIP_CONTENT_FAILURE: null,

  SET_SITE_CONTENT_SUCCESS: null,
  SET_SITE_CONTENT_FAILURE: null,

  SET_SITE_STATUS: null,

  SET_DISPLAY_INFO: null,
  CLOSE_DISPLAY_INFO: null,

  ACTIVATE_SITE_BTN: null,
  DEACTIVATE_SITE_BTN: null,

  SET_MAP_INFO: null,
  SET_MAP_INFO_SUCCESS: null,
  SET_MAP_INFO_FAILURE: null,

  SET_MAP_DIRECTION: null,
  SET_MAP_DIRECTION_SUCCESS: null,
  SET_MAP_DIRECTION_FAILURE: null,

  SET_AUDIO: null,
  RESET_AUDIO: null,

  GET_DISPLAY_INFO_DIRECTION_START: null,

  SET_DISPLAY_INFO_TRANSIT: null,
  SET_DISPLAY_INFO_TRANSIT_SUCCESS: null,
  SET_DISPLAY_INFO_TRANSIT_FAILURE: null,
  TOGGLE_DISPLAY_INFO: null,
  TOGGLE_SIDEBAR: null,

  TOGGLE_MAP_MODE: null,
  TOGGLE_CONTENT_MODE: null,

  SWITCH_DISPLAY_INFO_CARD: null,

  PRESS_MARKER_FAILURE: null,

  CLEAR_TRIP_LOCAL_STORAGE: null,

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
