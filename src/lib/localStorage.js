'use strict'
import createStorageEngine from 'redux-storage-engine-reactnativeasyncstorage'

export default (key) => ({
  load() {
    return createStorageEngine(key)
            .load()
            .then(res => {
              if (console.groupCollapsed && console.groupEnd) {
                const now = new Date()

                console.groupCollapsed(`%c load @ ${now.getHours()}:${now.getMinutes()}` +
                  `:${now.getSeconds()}:${now.getMilliseconds()} key = ${key}`,
                  'fontWeight: bold, color:"black"'
                )
                console.log(res)
                console.groupEnd()
              }
              return res
            })
  },
  save(state) {
    if (console.groupCollapsed && console.groupEnd) {
      const now = new Date()
      console.groupCollapsed(`%c save @ ${now.getHours()}:${now.getMinutes()}` +
        `:${now.getSeconds()}:${now.getMilliseconds()} key = ${key}`,
        'fontWeight: bold, color: black'
      )
      console.log(state)
      console.groupEnd()
    }

    return createStorageEngine(key).save(state)
  },
})
