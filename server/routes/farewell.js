var express = require('express')
var router = express.Router()

var farewellsDb = require ('../db/farewell')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  farewellsDb.getFarewells(db)
    .then(farewells => {
      res.json(farewells)
    })
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  farewellsDb.addFarewell(req.body.farewellText, db)
    .then(newFarewell => {
      res.json(newFarewell[0])
    })
})

module.exports = router
