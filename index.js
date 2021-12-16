// import mongoose package
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {json} = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

const port = 4000;

// apply CORS policy
app.use(cors());

app.use(json());

// initial route
app.get('/', function (req,res) {
    res.send('Welcome to homepage');
});

// assign routes to app and identify them with a particular path
app.use('/todos', todoRoutes);

// server listen port 4000
app.listen(port, function(){
    console.log(`Listening on http://localhost:${port}`);
})

const dbURI = 'mongodb+srv://olenu1:0549723545nii@cluster0.zgrb0.mongodb.net/proj-mng?retryWrites=true&w=majority';

// connect application to mongoDB
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (response) {
        console.log('Connected to mongodb');
    })
    .catch(function (err) {
        console.log('Could not connect to mongodb');
    });


    