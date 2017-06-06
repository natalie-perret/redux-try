import {combineReducers} from 'redux'

import greetings from './greetings'
import farewells from './farewells'
import greetingInput from './greetingInput'


export default combineReducers({
  greetings,
  farewells,
  greetingInput
})
