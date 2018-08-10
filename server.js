const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

const db = require('./config/keys').MongoURI;

const index = require('./api/router/index');


//connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('mongoDb is connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;



app.use('/api/router/index',index);




app.listen(port, () => console.log(`Server is working in ${port} port`));