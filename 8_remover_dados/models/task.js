const {DataTypes} = require('sequelize') // Importando os tipos de dados do Sequelize
const db = require('../db/conn') // Importando a conexão com o banco de dados
// Criando a nossa tabela Task
const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    required: true
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true
  }
})
// O required serve para...
module.exports = Task