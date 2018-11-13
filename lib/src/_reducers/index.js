import { combineReducers } from 'redux'
import { saga } from './saga.reducer'
import { postList } from './postList.reducer'
import { searchBar } from './searchBar.reducer'


const rootReducer = combineReducers({
  saga,
  searchBar,
  postList
})

export default rootReducer