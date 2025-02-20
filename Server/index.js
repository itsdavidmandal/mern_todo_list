const express = require('express')
const mongoose = require('mongoose') // Fixed typo
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err))

// Add new task
app.post('/add', (req, res) => {
    const task = req.body.task
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }))
})



// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})
