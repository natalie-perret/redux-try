function farewells (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FAREWELLS':
      return [...action.farewells]
    default:
      return state
  }
}

export default farewells
