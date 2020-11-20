import { put, takeLatest, all } from 'redux-saga/effects'

import * as ResultsSaga from './ResultsSaga';

function* rootSaga() {
  yield all([
    takeLatest('FETCH_DATA_BEGIN', ResultsSaga.getProducts)
  ])
}

export default rootSaga