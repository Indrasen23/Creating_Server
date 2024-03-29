const express = require('express')
const mongoose = require('mongoose');
const app = express()
const db = require('./db')
require('dotenv').config();


const port = process.env.PORT_VAL || 3000


const bodyParser = require('body-parser')
app.use(bodyParser.json()); // req.body




app.get('/', (req, res) => {
    res.send('Welcome to my Hotel... How i can i help you?, we have menu list')
})


// Import the router files
const personRoutes = require('./routes/personRoutes.js');
// Uer the routers
app.use('/person', personRoutes);



const menuRoutes = require('./routes/menuRoutes.js')
app.use('/menu', menuRoutes)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Comment added for testing projectf