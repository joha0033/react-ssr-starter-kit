export const searchBar = (
  state = {searchTerm: ''},
  action
) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state
  }
}