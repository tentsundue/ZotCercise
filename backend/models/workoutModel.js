const mongoose = require('mongoose'); // allows us to create schemas and models for our data

const Schema = mongoose.Schema; // create a shorthand for the mongoose schema constructor

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
}, {timestamps: true} ); // timestamps will automatically add createdAt and updatedAt fields to our documents

const workoutModel = mongoose.model('WorkoutModel', workoutSchema);
module.exports = workoutModel;

workoutModel.find();