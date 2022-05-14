const todo = require('../models/todo')
const Todo = require('../models/todo')


// post 
exports.getTodos = async function(request, response) {

    const todosData = await Todo.find({})

    if(!todosData) return response.json({ error: 'No todos!'})

    return response.json({
        todos: todosData.map(todo => ({
            text: todo.text,
            id: todo._id
        }))
    })
}

