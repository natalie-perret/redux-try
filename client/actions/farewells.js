import request from 'superagent'

export const receiveFarewells = (farewells) => {
  return {
    type: 'RECEIVE_FAREWELLS',
    farewells
  }
}

export const hideFarewells = () => {
  return {
    type: 'HIDE_FAREWELLS'
  }
}

export const inputFarewell = (newFarewell) => {
  return {
    type: 'INPUT_FAREWELL',
    newFarewell
  }
}

export const addFarewell = (newFarewell) => {
  return {
    type: 'ADD_FAREWELL',
    newFarewell
  }
}

export function getFarewells () {
  return (dispatch) => {
    request
    .get('/api/farewells')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveFarewells(res.body))
    })
  }
}

export function postFarewell (farewellText) {
  return (dispatch) => {
    request
    .post('/api/farewells')
    .send({farewellText})
    .end((err,res)=>{
      console.log({err, res});
      let newFarewell = {
        text: farewellText,
        id: res.body
      }
      if (!err) dispatch(addFarewell(newFarewell))
    })
  }
}
