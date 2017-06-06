import {combineReducers} from 'redux'

import greetings from './greetings'
import farewells from './farewells'
import addGreeting from './addGreeting'
import addFarewell from './addFarewell'


export default combineReducers({
  greetings,
  farewells,
  addGreeting,
  addFarewell
})
