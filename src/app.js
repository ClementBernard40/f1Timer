const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/F1RT");

app.use(express.urlencoded());
app.use(express.json());


// const postRoute = require('./routes/postRoute');
// const commentRoute = require('./routes/commentRoute');
const userRoute = require('./routes/userRoute');

// app.use('/posts', postRoute);
// app.use('/', commentRoute);
app.use('/users', userRoute);


app.listen(port, host);