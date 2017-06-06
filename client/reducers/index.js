import {combineReducers} from 'redux'

import greetings from './greetings'
import farewells from './farewells'
import addGreeting from './addGreeting'


export default combineReducers({
  greetings,
  farewells,
  addGreeting
})
