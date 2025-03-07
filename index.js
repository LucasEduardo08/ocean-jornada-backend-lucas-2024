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

// Sinalizando ao Express a utilização do JSON
app.use(express.json())

// Create - POST /item
app.post("/item", function(req, res){
  const item = req.body.nome  // obter o nome enviado do req
  lista.push(item)            // Adiciona na lista
  res.send('Item adicionado com sucesso')
})



app.listen(3000)