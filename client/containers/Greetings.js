import React from 'react'
import {connect} from 'react-redux'

import {getGreetings, hideGreetings} from '../actions/greetings'
import AddGreeting from '../components/AddGreeting'


const Greetings = ({greetings, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getGreetings())}>Show Greetings</button>
    {greetings.map(renderGreeting)}
    <button onClick={() => dispatch(hideGreetings())}>Close</button>
    <AddGreeting />
  </div>
)

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)


const mapStateToProps = (state) => {
return {greetings: state.greetings}

}

export default connect(mapStateToProps)(Greetings)
