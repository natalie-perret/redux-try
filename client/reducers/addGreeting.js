
function addGreeting (state = null, action) {
  switch (action.type) {
    case 'INPUT_GREETING':
    console.log(action.newGreeting);
      return action.newGreeting
    default:
    console.log("please no");
      return state
  }
}

export default addGreeting
