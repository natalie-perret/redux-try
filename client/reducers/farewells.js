function farewells (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FAREWELLS':
      return [...action.farewells]
    case 'HIDE_FAREWELLS':
      return []
    case 'ADD_FAREWELL':
      state.push(action.newFarewell)
      return state
    default:
      return state
  }
}

export default farewells
