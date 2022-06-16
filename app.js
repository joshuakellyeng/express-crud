//Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//dotenv
require('dotenv/config');

// Middle Ware

app.use(bodyParser.json());
app.use(cors());
// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
	res.send('We are home');
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log('Connected to DB!');
});

// How do we start listening to the server
app.listen(3000);
