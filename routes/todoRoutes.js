const express = require('express')
const router = express.Router()

const { home, createTodo, getTodos, getTodo, editTodo, deleteTodo,searchTodo } = require('../controllers/todocontrollers')

router.get('/', home)
router.post('/createtodo', createTodo)
router.get('/getTodos', getTodos)
router.get('/getTodo/:id', getTodo)
router.put('/editTodo/:id', editTodo)
router.delete('/deleteTodo/:id',deleteTodo)
router.get('/search/:searchTerm',searchTodo)

module.exports = router

