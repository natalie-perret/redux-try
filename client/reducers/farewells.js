function farewells (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FAREWELLS':
      return [...action.farewells]
    case 'HIDE_FAREWELLS':
      return []
    default:
      return state
  }
}

export default farewells
