const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json())


//connect mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to MongoDB'))

//Routes
app.use('/courses', require('./router/courses'))

app.listen(port, () => console.log(`running on port ${port}`));
