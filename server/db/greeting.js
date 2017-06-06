const getGreetings = (db) => {
  return db('greetings')
    .select('*')
}

const addGreeting = (newGreeting, db) => {
  return db('greetings').insert(newGreeting)
}

module.exports = {
  getGreetings,
  addGreeting
}
