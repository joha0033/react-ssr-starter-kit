import { put, call, apply  } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import config from '../../config'

import {
  setPostList
} from './../_actions'

export function* currentPostsSaga() {
  const URL = `http://${config.host}:${config.port}/data`
  const response = yield call(fetch, URL)
  const data = yield apply(response, response.json)
  const mapIntoObject = (arr) => {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur
      return acc
    }, {})
  }
  let newRes = {}
  
  Object.keys(data).forEach((key) => {
    let obj = mapIntoObject(data[key], key)
    newRes = {
      ...newRes,
      [key]: obj
    }
  })

  yield put(setPostList(newRes))
}