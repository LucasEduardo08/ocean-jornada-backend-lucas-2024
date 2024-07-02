const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ola', function (req, res) {
  res.send('Olá Mundo')
})

app.listen(3000)