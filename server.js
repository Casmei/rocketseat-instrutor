const express = require("express")
const server = express()

//Servidor, pegue essa barra e execute alguma coisa
server.get('/', (req, res) => {
  return res.send('hi')
})

//# Inicinado o servidor
//O servidor ficara ouvindo a porta 5000
server.listen(5000, () => {
  console.log('🚀 Servidor Rodando ')
})