import { makeActionCreator } from '../_utility'
export const START_SAGA = 'START_SAGA'
export const startSaga = makeActionCreator(START_SAGA, 'data')