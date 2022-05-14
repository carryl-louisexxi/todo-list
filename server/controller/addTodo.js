const Todo = require('../models/todo')


// post 
exports.addTodo = async function(request, response) {

    const {text} = request.body 

    const newTodo =  new Todo({text})

    const {error} = newTodo.save() 

    if(!error) return response.send('ok')

    response.status(500).send({message: error.message})
}

