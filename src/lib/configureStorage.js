import storage from 'redux-storage'
import storageDebounce from 'redux-storage-decorator-debounce'
import { storageKey } from '../config'

const createStorageMiddleware = storageEngine => {
  const decoratedEngine = storageDebounce(storageEngine, 300)
  return storage.createMiddleware(decoratedEngine)
}

const configureStorage = createStoreEngine => {
  const storageEngine = createStoreEngine &&
                        createStoreEngine(storageKey)
  const storageMiddleware = storageEngine && createStorageMiddleware(storageEngine)

  return storageMiddleware
}

export default configureStorage
