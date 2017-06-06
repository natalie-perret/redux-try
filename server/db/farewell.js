const getFarewells = (db) => {
  return db('farewells')
    .select('*')
}

const addFarewell = (text, db) => {
  return db('farewells').insert({text})
}

module.exports = {
  getFarewells,
  addFarewell
}
