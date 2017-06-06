import React from 'react'
import {connect} from 'react-redux'

import AddGreeting from '../components/AddGreeting'

const GreetingInput = () => (
  <div>
    <AddGreeting />
  </div>
)


export default connect()(GreetingInput)
