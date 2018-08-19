const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

const db = require('./config/keys').MongoURI;

//Load Routes
const index = require('./api/router/index');
const users = require('./api/router/users');


//connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('mongoDb is connected'))
    .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config

require('./config/passport')(passport);

app.use('/api/router/index',index);
app.use('/api/router/users',users);


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is working in ${port} port`));