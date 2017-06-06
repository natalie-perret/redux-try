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

router.post('/', (req, res) => {
  console.log(req.body);
  let db = req.app.get('db')
  greetingsDb.addGreeting(req.body.greetingText, db)
    .then(newGreeting => {
      res.json(newGreeting[0])
    })
})

module.exports = router
