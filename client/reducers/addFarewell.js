
function addFarewell (state = null, action) {
  switch (action.type) {
    case 'INPUT_FAREWELL':
      return action.newFarewell
    default:
      return state
  }
}

export default addFarewell
