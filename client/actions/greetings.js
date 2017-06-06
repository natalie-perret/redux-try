import request from 'superagent'

export const receiveGreetings = (greetings) => {
  return {
    type: 'RECEIVE_GREETINGS',
    greetings
  }
}

export const hideGreetings = () => {
  return {
    type: 'HIDE_GREETINGS'
  }
}

export const inputGreeting = (newGreeting) => {
  return {
    type: 'INPUT_GREETING',
    newGreeting
  }
}

export const addGreeting = (newGreeting) => {
  return {
    type: 'ADD_GREETING',
    newGreeting
  }
}

export function getGreetings () {
  return (dispatch) => {
    request
      .get(`/api/greetings`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveGreetings(res.body))
      })
  }
}

export function postGreeting (greetingText) {
  return (dispatch) => {
    console.log({greetingText});
    request
    .post('/api/greetings')
    .send({greetingText})
    .end((err,res)=>{
      console.log({err, res});
      let newGreeting = {
        text: greetingText,
        id: res.body
      }
      if (!err) dispatch(addGreeting(newGreeting))
    })
  }

}
