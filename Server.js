const express = require('express')
const mongoose = require('mongoose');
const app = express()
const db = require('./db')
require('dotenv').config();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person.js')

const port = process.env.PORT_VAL || 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json()); // req.body


// Middleware Function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()} Request Made to : ${req.originalUrl}]`)
    next(); // MOve on to the next phase (VERY IMP to call next func)
}
app.use(logRequest)


passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    // authentication logic here
    try {
        console.log('Received credentials', USERNAME, PASSWORD);
        const user = await Person.findOne({ username: USERNAME });

        if (!user) {
            // done(error, user, info)
            return done(null, false, { message: 'Incorrect username' })
        }
        const isPasswordMatch = (user.password === PASSWORD) ? true : false;
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password.' })
        }
    }
    catch (err) {
        return done(err);
    }
}))

app.use(passport.initialize());



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