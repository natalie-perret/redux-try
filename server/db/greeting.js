const getGreetings = (db) => {
  return db('greetings')
    .select('*')
}

const addGreeting = (text, db) => {
  return db('greetings').insert({text})
}

module.exports = {
  getGreetings,
  addGreeting
}
