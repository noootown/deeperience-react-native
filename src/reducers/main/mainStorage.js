'use strict'
import storageEngine from '../../lib/localStorage'

const MAIN = 'MAIN'

export function getMainStorage() {
  return storageEngine(MAIN).load()
}

export function setFirstTimeStorage() {
  return storageEngine(MAIN).save({
    firstTime: false,
  })
}
