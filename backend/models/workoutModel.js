const mongoose = require('mongoose')

// create new schema
const Schema = mongoose.Schema

// first arguement decribes how the object look
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
}, { timestamps:true })
// this second arguemnt will tell the time whenever a new document is created

// now we need to create a modal for thius schema 
// Schema- it defines the strtucture of a particular document inside a database
// model- it applies a schema to model and then we use this model to interact with the collection

module.exports = mongoose.model('Workout', workoutSchema)

