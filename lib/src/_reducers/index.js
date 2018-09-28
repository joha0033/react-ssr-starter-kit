import { combineReducers } from 'redux'

import { postList } from './postListReducer'
import { searchBar } from './searchBarReducer'


const rootReducer = combineReducers({
  searchBar,
  postList
})

export default rootReducer