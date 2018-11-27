import { setSearchTerm } from '../src/_constants/'
import configureMockStore from 'redux-mock-store'
import { searchBarActions } from '../src/_actions/searchBar.actions'
import searchBarReducer from '../src/_reducers/searchBar.reducer'
const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('(search bar actions)', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      searchTerm: ''
    })
  })
  it('should create SET_SEARCH_TERM action', () => {
    const searchTerm = 'CLI'
    const expectedAction = {
      type: 'SET_SEARCH_TERM',
      searchTerm
    }
    expect(setSearchTerm(searchTerm)).toEqual(expectedAction)
  })
  it('should dispatch searchBar action', () => {
    const searchTerm = 'CLI'
    let actionCall = searchBarActions.updateSearchTerm(searchTerm)
    let action = actionCall(store.dispatch)
    expect(typeof actionCall).toEqual('function')
    expect(action.searchTerm).toEqual('CLI')
    expect(action.type).toEqual('SET_SEARCH_TERM')
  })
  it('should reinitialize state when input field is empty', () => {
    const noSearchTerm = ''
    store.dispatch({
      type    : 'SET_SEARCH_TERM',
      searchTerm : noSearchTerm
    })
    expect(store.getActions()[0].searchTerm).toBeFalsy()
    expect(typeof store.getActions()[0].searchTerm).toBe('string')
  })
})

describe('Search Bar Reducer', () => {
  it('should reduce for search bar', () => {
    expect(searchBarReducer(undefined, {})).toEqual(
      {
        searchTerm: ''
      }
    )
  })
  it('should handle SET_SEARCH_TERM', () => {
    expect(searchBarReducer(undefined, {
      type: 'SET_SEARCH_TERM',
      searchTerm: 'chaco'
    })).toEqual({
      searchTerm: 'chaco'
    })
  })
})