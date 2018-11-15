import store from '../src/store'
import { searchBarActions } from '../src/_actions/searchBar.actions'

describe('(search bar reducer)', () => {
  it('store should be initialized with Location state', () => {
    const searchTerm = 'Github'

    store.dispatch({
      type    : 'SET_SEARCH_TERM',
      payload : searchTerm
    })
    expect(store.getState().searchBar.searchTerm).toBe('Github')
    expect(typeof store.getState().searchBar.searchTerm).toBe('string')
  })

  it('store should be re-initialized when sent empty string', () => {
    const noSearchTerm = ''

    store.dispatch({
      type    : 'SET_SEARCH_TERM',
      payload : noSearchTerm
    })
    expect(store.getState().searchBar.searchTerm).toBeFalsy()
    expect(typeof store.getState().searchBar.searchTerm).toBe('string')
  })

})

describe('(search bar actions)', () => {
  it('should call action to dispatch reducer type', () => {
    const searchTerm = 'CLI'
    let searchTermAction = searchBarActions.setSearchTerm(searchTerm)
    expect(typeof searchTermAction).toEqual('function')
  })
})