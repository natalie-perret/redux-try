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
