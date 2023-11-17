const mongoose = require('mongoose'); // allows us to create schemas and models for our data

const Schema = mongoose.Schema; // create a shorthand for the mongoose schema constructor

const workoutSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

}, {
    timestamps: true,
});