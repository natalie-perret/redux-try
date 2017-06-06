import React from 'react'
import {connect} from 'react-redux'

import {inputGreeting, postGreeting} from '../actions/greetings'

function submitGreeting(e, dispatch, addGreeting) {
  e.preventDefault()
  dispatch(postGreeting(addGreeting))
}

const AddGreeting = ({dispatch, addGreeting}) => (
    <form>
      <input type="text" onChange={(e) => dispatch(inputGreeting(e.target.value))}/>
      <input type="submit" onClick={(e) => submitGreeting(e, dispatch, addGreeting)} />
    </form>
)

function mapStateToProps(state) {
  return {
    addGreeting: state.addGreeting
  }
}

export default connect(mapStateToProps)(AddGreeting)
