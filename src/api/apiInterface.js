'use strict'

export default class apiInterface {

  /**
   * ### initAuth : call by starting app
   * @param : none
   * @return : object
   */
  initAuth() {}

  /**
   * ###  getProvder
   * @param provider: string, "facebook" or "google"
   * @return the instance of firebase.auth.FacebookAuthProvider or firebase.auth.GoogleAuthProvider
   * which property only one: providerId:string
   * https://firebase.google.com/docs/reference/js/firebase.auth.FacebookAuthProvider
   * https://firebase.google.com/docs/reference/js/firebase.auth#googleauthprovider
   * https://firebase.google.com/docs/reference/js/firebase.auth.AuthProvider
   */
  getProvider(provider) {}

  /**
   * ### signup
   *
   * @param user
   * {email: "barton@y.com", password: "Password!"}
   * @returns user.json
   * Properties -> https://firebase.google.com/docs/reference/node/firebase.User
   */
  signup(user) {}

  /**
   * ### login
   * @param user
   *  {email: "123@yahoo.com.tw", password: "Passw0rd!"}
   * @returns user.json
   * Properties -> https://firebase.google.com/docs/reference/node/firebase.User
   */
  login(user) {}

  /**
   * ### logout
   * returns firebase.Promise containing void
   */
  logout() {}

  /**
   * ### resetPassword
   * @param email: string
   * @returns object
   * if error:  {code: xxx, error: 'message'}
   */
  resetPassword(email) {}

  /**
   * ### writeDataBase
   * @parms path: string , value: object
   * @return promise
   */
  writeDataBase(path, value) {}

  /**
   * ### updateDataBase
   * @parms path: string , value: object
   * @return promise
   */
  updateDataBase(path, value) {}

  /**
   * ### readDataBase
   * @parms path: string
   * @return promise
   */
  readDataBaseOnce(path) {}
}
