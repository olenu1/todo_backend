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
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(500).send('an error occured');
    });
    // res.send('Get all todos');
};

const getTodoById = (req,res) =>{
    const id = req.params.id
    Todo.findById(id).then(response =>{
        res.status(200).send(response);
    }).catch(err =>{
        res.status(500).send('an error occured');
    });
}

const createTodo = (req, res) =>{
     const todo = new Todo(req.body);
     todo.save().then(response => {
         res.status(201).send(response)
     }).catch(err => {
         res.status(500).send('an error occured');
     })
}