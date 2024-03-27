const express = require('express')
const app = express()
const port = 3000
const db = require('./db')


const bodyParser = require('body-parser')
app.use(bodyParser.json()); // req.body




app.get('/', (req, res) => {
    res.send('Welcome to my Crib... How i can i help you?, we have menu list')
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


// Comment added for next version