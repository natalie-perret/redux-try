var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')


var greetings = require('./routes/greeting')
var farewells = require('./routes/farewell')

var server = express()
server.use(bodyParser.json())

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

server.use(cors(corsOptions))

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
server.use('/api/farewells', farewells)

module.exports = server
