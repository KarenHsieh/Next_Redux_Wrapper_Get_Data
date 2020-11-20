import { put, takeEvery, all } from 'redux-saga/effects'
import * as ResultsActions from '../actions/ResultsActions'

import tempData from './temp'
import axios from 'axios'

export function* getProducts() {
  try {
    // 取資料寫在這
    // const { data } = yield call(axios.post, uri.orderHandlerList, action.parameters)
    console.warn(tempData);

    yield put(ResultsActions.fetchProductsSuccess(tempData))

  } catch (error) {
    console.log(error)
  }
}