function greetings (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GREETINGS':
      return [...action.greetings]
    case 'HIDE_GREETINGS':
      return []
    default:
      return state
  }
}

export default greetings
