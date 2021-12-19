const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

// Setando o style css
server.use(express.static('public'))

//Configurando a template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  // IMprimir o HTML
  autoescape: false,
  noCache: true
})

//Servidor, pegue essa barra e execute alguma coisa
// ### Rota Raiz
server.get('/', (req, res) => {
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/68354933?v=4",
    name: "Tiago de Castro",
    role: "Desenvolvedor - Estudante",
    description: 'Tenho 18 anos, atualmente estou no segundo período de <a href="">Análise e Desenvolvimento de Sistemas</a>. Estou sempre em busca de experiências que me possibilitem expandir minhas áreas de conhecimento.',
    links: [
      { name: "Github", url: "https://github.com/Casmei" },
      { name: "Instagram", url: "https://www.instagram.com/tiago.cali/" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/tiago-de-castro-lima-3814911b9/" }
    ]
  }
  // Vai retornar a renderização da view
  return res.render("about", { about })
})

// ### Rota vídeo
server.get ("/video", (req, res) => {
  const id = req.query.id
  // Ele vai rodar todos os elementos do array video e aplicar a função para cada
  const video = videos.find((video) => {
    return video.id == id
  })

  if (!video) {
    return res.send("video not found")
  }

  return res.render("video", { item: video })

})

// ### Rota Portfolio
server.get('/portfolio', (req, res) => {
  return res.render("portfolio", {items: videos})
})

//# Inicinado o servidor
//O servidor ficara ouvindo a porta 5000
porta = 5000
server.listen(porta, () => {
  console.log(`🚀 Servidor Rodando na porta:
  http://localhost:${porta}`)
})