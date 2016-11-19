export const cloudServiceSetting = {
  firebase: true,
}

export const auth = process.env.NODE_ENV === 'production' ? {
  firebase: {
    apiKey: 'apiKey',
    authDomain: 'XXX.firebaseapp.com',
    databaseURL: 'https://XXX.firebaseio.com',
    storageBucket: 'XXX.appspot.com',
  },
} : {
  firebase: {
    apiKey: 'apiKey',
    authDomain: 'XXX.firebaseapp.com',
    databaseURL: 'https://XXX.firebaseio.com',
    storageBucket: 'XXX.appspot.com',
  },
}

export const storageKey = 'set_storage_key'
