const mongoose = require('mongoose');


// SCHEMA ->  Schema is basically the structure in which we are going to collect the data to avoid unpredicted errors
// Define the Person Schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'manager', 'waiter', 'Other'],
        required: true
    },
    mobile: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true // It means that email should be unique
    },
    address: {
        type: String
    },
    salary: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


// Create PERSON modal
const Person = mongoose.model('Person', personSchema, 'People');
module.exports = Person;