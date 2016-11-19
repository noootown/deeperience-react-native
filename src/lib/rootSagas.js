import authSaga from '../reducers/auth/authSaga'
import mainSaga from '../reducers/main/mainSaga'

export default function* sagas() {
  yield [
    ...authSaga,
    ...mainSaga,
  ]
}
