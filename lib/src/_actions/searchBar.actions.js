const updateSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm
})

const setSearchTerm = (searchTerm) => 
  (dispatch) => dispatch(updateSearchTerm(searchTerm))


export const searchBarActions = {
  setSearchTerm
}