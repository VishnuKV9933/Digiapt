const express = require('express');
const app = express();
const connectToDatabase = require('./Connection/connection');
const dotenv =require("dotenv").config()
const helmet =require("helmet")
const morgon = require("morgan")
const cors = require('cors')
const bodyParser=require('body-parser')
const productRouter = require('./Routes/productRoute')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgon("common"))

app.use('/api',productRouter)


app.use(cors({
    origin: ['*'],
    methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  }));
  

const port = process.env.PORT || 4000; 

connectToDatabase();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});