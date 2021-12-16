const { response } = require('express');
const {Todo} = require('../models/todo');

//old way 
// function functionName(){}
// new way
// const functionName =() => {
// };

const getAllTodos = (req, res) =>{
    Todo.find()
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.send('an error occured');
    });
    // res.send('Get all todos');
};

const getTodoById = (req,res) =>{
    const id = req.params.id
    Todo.findById(id).then(response =>{
        res.send(response);
    }).catch(err =>{
        res.send('an error occured');
    });
}

const createTodo = (req, res) =>{
     const todo = new Todo(req.body);
     todo.save().then(response => {
         res.send(response)
     }).catch(err => {
         res.send('an error occured');
     })
}