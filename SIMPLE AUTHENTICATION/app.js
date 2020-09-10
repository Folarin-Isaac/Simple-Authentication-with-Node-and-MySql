const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = express.Router();
dotenv.config({ path:'./.env'})

const userRoutes = require('./routes/users.routes')

 // create the express app
const app = express();

// parse request of cotent-type  -applicatio/json
app.use(bodyParser.json());

// parse request of content type -application/urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

// Establish the server connection
app.listen(5000, ()=>{
  console.log("Server started at port 5000")
});

