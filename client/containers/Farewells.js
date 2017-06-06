import React from 'react'
import {connect} from 'react-redux'

import {getFarewells, hideFarewells} from '../actions/farewells'
import AddFarewell from '../components/AddFarewell'

const Farewells = ({farewells, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getFarewells())}>Show Farewells</button>
    {farewells.map(renderFarewell)}
    <button onClick={() => dispatch(hideFarewells())}>Close</button>
    <AddFarewell />
  </div>
)

const renderFarewell = (farewell, key) => (
  <h1 key={key}>{farewell.text}</h1>
)

const mapStateToProps = (state) => {
  return {farewells: state.farewells}
}

export default connect (mapStateToProps)(Farewells)
