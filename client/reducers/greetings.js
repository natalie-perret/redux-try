function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'HIDE_GREETINGS':
      return []
    case 'ADD_GREETING':
      state.push(action.newGreeting)
      return state
    default:
      return state
  }
}

export default greetings
