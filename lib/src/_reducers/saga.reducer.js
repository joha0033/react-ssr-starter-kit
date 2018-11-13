export const saga = (
  state = {saga: false},
  action
) => {
  switch (action.type) {
    case 'START_SAGA':
      return {
        ...state,
        saga: true
      }
    default:
      return state
  }
}