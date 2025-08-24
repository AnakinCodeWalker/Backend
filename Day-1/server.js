/*
npm init -y
npm i express */

// import express from express;

//at first we need to install express
//then we can import it/require it

const express = require('express');

//then we can create an instance of express
const app = express();


//parser is used in put or post request.
//we need to use middleware to parse the body of the request
const bodyParser = require('body-parser');

//now the app can use bodyParser to parse the body of the request
//specifically it will parse json data and make it available in req.body
app.use(bodyParser.json());



//we can use app to create routes and listen to requests 

//server is listening on port 3000
app.listen(3000,
    () => {
        console.log("server is running on port 3000");
    });

//we fetch data from the server using routes[get.]
app.get('/', (req, res) => {
    res.send("Hello World");
});

//now performing the post request
app.post('/api/cars', (req, res) => {
    //post needs some data to be sent to the server
    const { name, model } = req.body;
    //and the data is going to be in the body of the request
    console.log(name, model);
    //responding to the client
    res.send("Car is added");
});
//importing mongoose to connect to the database 
const mongoose = require('mongoose');
//connecting to the database
// mongoose.connect is used to connect to the database
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    // the first parameter is url ,portnumber and database name

    // the second parameter is parser options
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
    //the whole connection is promised based
    .then(() => { console.log("Connected to the database"); })
    .catch((err) => { console.log(err); });



// mongoose.connect('',{});
//if a database is not there it will create a new one and connect to it
//if the database is there it will connect to it

