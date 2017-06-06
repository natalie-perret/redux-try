function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'HIDE_GREETINGS':
      return []
    case 'ADD_GREETING':
    console.log(action.newGreeting);
      state.push(action.newGreeting)
      console.log(state);
      return state
    default:
      return state
  }
}

export default greetings
