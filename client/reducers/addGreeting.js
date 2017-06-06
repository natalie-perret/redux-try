
function addGreeting (state = null, action) {
  switch (action.type) {
    case 'INPUT_GREETING':
      return action.newGreeting
    default:
      return state
  }
}

export default addGreeting
