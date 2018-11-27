/**
 * Action Creators
 * --------------
 */
import { setSearchTerm } from '../_constants/'

/**
 * Update Search Term function
 * --------------------------
 */
const updateSearchTerm = (searchTerm) => {
  return (dispatch) => dispatch(setSearchTerm(searchTerm))
}

/**
 * Export Update Function
 * ---------------------
 */
export const searchBarActions = {
  updateSearchTerm
}
