export default function searchBar(
  state = {searchTerm: ''},
  action
){
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    default:
      return state
  }
}