var express = require('express')
var router = express.Router()

var farewellsDb = require ('../db/farewells')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  farewellsDb.getFarewells(db)
    .then(farewells => {
      res.json(farewells)
    })
})

module.exports = router
