const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

// Setando o style css
server.use(express.static('public'))

//Configurando a template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

//Servidor, pegue essa barra e execute alguma coisa
// ### Rota Raiz
server.get('/', (req, res) => {
  // Vai retornar a renderização da view
  return res.render("about")
})

// ### Rota Portfolio
server.get('/portfolio', (req, res) => {
  return res.render("portfolio", {items: videos})
})

//# Inicinado o servidor
//O servidor ficara ouvindo a porta 5000
server.listen(5000, () => {
  console.log('🚀 Servidor Rodando ')
})