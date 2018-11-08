import { put, call, apply  } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import config from '../../config'

import {
  getPostListAction,
  setPostListAction,
  postListSuccess
} from './../_actions'
import { delay } from 'redux-saga'


export function* getPostList() {
  try{
    console.log('hit!!')
    
    const URL = `http://${config.host}:${config.port}/data`
    yield call(delay, 1000)
    const response = yield call(fetch, URL)
    // console.log(JSON.stringify(response), 'ressyres')
    
    const data = yield apply(response, response.json)
    // console.log(data)
    
    const mapIntoObject = (arr) => {
      return arr.reduce((acc, cur) => {
        acc[cur._id] = cur
        return acc
      }, {})
    }

    let responseObject = {}
    Object.keys(data).forEach((key) => {
      let obj = mapIntoObject(data[key], key)
      responseObject = {
        ...responseObject,
        [key]: obj
      }
    })
    // console.log(responseObject)
    
    yield put(getPostListAction(responseObject))
    yield put(setPostListAction())
    yield put(postListSuccess())
  } catch (error) {  
    yield put({type: 'POST_LIST_FAILURE', error})
  }
  
}

