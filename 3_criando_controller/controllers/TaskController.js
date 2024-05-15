const Task = require('../models/task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }
}