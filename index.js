const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ola', function (req, res) {
  res.send('Olá Mundo!!!')
})

// Lista personagem
const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]

// Read All - GET /item
app.get("/item", function(req, res){
  res.send(lista)
})
  
app.listen(3000)