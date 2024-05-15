const express = require('express') // importando o express
const exphbs = require('express-handlebars') // importando o handlebars
const conn = require('./db/conn') // importando a conexão com o banco de dados
const Task = require('./models/task')
const taskRoutes = require('./routes/taskRoutes')

const app = express() // Invocando os métodos do express para app
const port = 3000 // Definindo a porta

// Definindo a template engine
app.engine('handlebars', exphbs.engine()) // Definindo a engine
app.set('view engine', 'handlebars') // Definindo a view engine

// Permitir Leitura do Body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json()) // Ler em json 

app.use(express.static('public')) // Definindo o nome da pasta para os arquivos estáticos

// ROTAS:
// Rotas de task:
app.use('/tasks', taskRoutes)

// Rota príncipal:
app.get('/', (req, res) => {
  res.send('Olá mundo')
})

// Definindo a porta que o servidor irá rodar, assim como colocar um callback caso tenha funcionado
conn.sync().then(() => {
  app.listen(port, () => {
    console.log(`Tudo conectado com sucesso meu patrão!!`)
    console.log(`Servidores rodando a todo vapor na porta: ${port}`)
  })
}).catch((err => console.log(err)))