'use strict'

import { cloudServiceSetting as Is } from '../config'
import Firebase from './firebase'

export default function apiFactory(token = null) {
  if (Is.firebase) {
    return new Firebase()
  }
}
