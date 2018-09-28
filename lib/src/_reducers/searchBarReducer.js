export const searchBar = (
  state = {searchTerm: ''},
  action
) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        saerchTerm: action.payload
      }
    default:
      return state
  }
}