const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Title is required'],
        trim: true,
    },
    tasks: [{type: 
        String
    }],
})

todoSchema.set('timestamps', true)

module.exports = mongoose.model('todo', todoSchema)