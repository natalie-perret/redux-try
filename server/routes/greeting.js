var express = require('express')
var router = express.Router()

var greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      res.json(greetings)
    })
})

router.post('/add-greeting', (req, res) => {
  let db = req.app.get('db')
  greetingsDb.addGreeting(req.body, db)
    .then(newGreeting => {
      res.json(newGreeting)
    })
})

module.exports = router
