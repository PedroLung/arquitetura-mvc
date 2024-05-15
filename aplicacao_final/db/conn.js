const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'marte135', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Banco de dados conectado com sucesso meu patrão')
} catch(error) {
  console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize