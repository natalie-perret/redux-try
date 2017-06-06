import React from 'react'
import {connect} from 'react-redux'

import {inputFarewell, postFarewell} from '../actions/farewells'

function submitFarewell(e, dispatch, addFarewell) {
  e.preventDefault()
  dispatch(postFarewell(addFarewell))
}

const AddFarewell = ({dispatch, addFarewell}) => (
    <form>
      <input type="text" onChange={(e) => dispatch(inputFarewell(e.target.value))}/>
      <input type="submit" onClick={(e) => submitFarewell(e, dispatch, addFarewell)} />
    </form>
)

function mapStateToProps(state) {
  return {
    addFarewell: state.addFarewell
  }
}

export default connect(mapStateToProps)(AddFarewell)
