const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'done'],
        default: 'todo'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);