import { put } from 'redux-saga/effects'

import {
  startSaga
} from '../_actions'

export function* getPostList() {
  try{
    yield put(startSaga(true))
  } catch (error) {  
    yield put({type: 'START_SAGA_FAILURE', error})
  }
  
}

