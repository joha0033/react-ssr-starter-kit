import { saga } from '../src/_reducers/saga.reducer'

describe('Saga Reducer', () => {
  it('should reduce for Saga', () => {
    expect(saga(undefined, {})).toEqual(
      {
        saga: false
      }
    )
  })
  it('should handle SET_SEARCH_TERM', () => {
    expect(saga(undefined, {
      type: 'START_SAGA'
    })).toEqual({
      saga: true
    })
  })
})