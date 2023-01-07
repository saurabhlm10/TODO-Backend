const Todo = require('../model/TodoModel')

exports.home = (req, res) => {
    res.send('Hello')
}

exports.createTodo = async(req, res) => {
    try {
        const { title, tasks } =req.body

        if(!title || !tasks){
            throw new Error('Title and tasks are required')
        }

        const todo = await Todo.create({title, tasks})

        res.status(201).json({
            success: true,
            message: 'todo created successfully',
            todo
        })
    
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'todo Not created ',
        })
    }
}

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()

        res.status(201).json({
            success: true,
            message: 'Fetched todos successfully',
            todos
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Did not Fetch todos successfully',
        })
    }
}

exports.getTodo = async (req, res) => {
    try {
        const todoId = req.params.id

        const todo = await Todo.findById(todoId)

        res.status(201).json({
            success: true,
            message: 'Fetched todo successfully',
            todo
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Did not Fetch todos successfully',
        })
    }
}

exports.editTodo = async (req, res) => {
    try {
        // if(!req.params.id){
        //     res.send('No id')
        // }
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

        res.status(201).json({
            success: true,
            message: 'Todo updated successfully',
            todo
        })
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Todo not updated',
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        const todo = await Todo.findByIdAndDelete(todoId)

        res.status(201).json({
            success: true,
            message: 'Todo deleted successfully',
        })
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Todo not updated',
        })
    }
}

exports.searchTodo = async (req, res) => {
    try {
        const {searchTerm} = req.params

        const searchResults = await Todo.find({$or :  [{title: new RegExp(searchTerm, 'i')},{tasks: new RegExp(searchTerm, 'i')}]})  

        res.status(201).json({
            success: true,
            message: 'searchResults fetched successfully',
            searchResults
        })

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'searchResults not fetched',
        })

    }
}