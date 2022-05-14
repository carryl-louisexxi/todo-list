const { addTodo } = require('../controller/addTodo')
const { deleteTodo } = require('../controller/deleteTodo')
const { getTodos } = require('../controller/getTodos')
const router = require('express').Router()


// post todo
router.post('/post', addTodo)

// get todo
router.get('/get', getTodos)

// delete todo 
router.delete('/delete/:id', deleteTodo)

module.exports = router