import { combineReducers } from 'redux'
// import { postList } from './postListReducer'
import { postList } from './postList.reducer'
import { searchBar } from './searchBarReducer'


const rootReducer = combineReducers({
  // state: {clientState: {loading: false}},
  searchBar,
  postList
})

export default rootReducer