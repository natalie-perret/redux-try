function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'HIDE_GREETINGS':
      return []
    case 'INPUT_GREETING':
      return [...action.newGreeting]
    default:
      return state
  }
}

export default greetings
