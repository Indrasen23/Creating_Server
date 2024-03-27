// Step 1
const mongoose = require('mongoose');

// Define the MongoDB connection URL
//  mongodb://localhost:27017

const mongoURL = 'mongodb://localhost:27017/hotels' // Find if there is db in the name of the hotels else create it.

// Step 2: Set up mongoDB Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, // Since things get updated very fast hence it is used to avoid errors
    useUnifiedTopology: true
})


// Step 3: Get the default connection
// MOngoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
})

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})


// Step 4: Export the database connection
module.exports = db;