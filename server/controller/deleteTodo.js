const { isValidObjectId } = require('mongoose')
const Todo = require('../models/todo')


// delete 
exports.deleteTodo = async function(request, response) {
    const {id} = request.params

    if(!isValidObjectId(id)) return response.status(401).json({error: 'Invalid id'})

    const todoData = await Todo.findById(id)

    if(!todoData) return response.status(404).json({error: 'Not found todo data'})

    const {respond, error} = await Todo.deleteOne(todoData)

    if(!error) return response.json({message: 'deleted successfully'})
}

