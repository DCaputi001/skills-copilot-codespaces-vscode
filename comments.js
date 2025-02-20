// Create web server
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;
const path = require('path');

// Create a comment
app.post('/comments', (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Comment can not be empty"
        });
    }
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send({
            message: "Comment not found"
        });
    }
    res.send(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send({
            message: "Comment not found"
        });
    }
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.send(comment);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send({
            message: "Comment not found"
        });
    }
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

const comments = [
    {id: 1, name: "John", comment: "Hello"},
    {id: 2, name: "Mary", comment: "Hi"},
    {id: 3, name: "Alice", comment: "Good morning"}
];