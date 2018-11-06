import store from '../src/store'

describe('(Store) createStore', () => {
  let initalStoreState = store.getState()

  it('should be an object', () => {
    expect(typeof initalStoreState).toBe('object')
  })

  it('should have initial state of searchTerm: \'\', type of string', () => {
    expect(initalStoreState.searchBar.searchTerm).toBe('')
    expect(typeof initalStoreState.searchBar.searchTerm).toBe('string')
  })

  it('should have initial state of searchTerm: \'\', type of string', () => {
    expect(initalStoreState.postList.loading).toBeTruthy()
    expect(typeof initalStoreState.postList.loading).toBe('boolean')
  })
    
})