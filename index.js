const express = require('express');
// const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

//this allows us to call the env variables inside our node application
const dotenv = require('dotenv').config();

//set up middleware between client and server
// app.use(cors());
//allows us to pass json payloads from front end to back end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//create the route 
app.use('/openai', require('./routes/openaiRoutes'))

//server listening on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));