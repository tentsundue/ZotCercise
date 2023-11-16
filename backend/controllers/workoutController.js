const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt:-1});   // find all workouts in decsending order 
                                                                        // (could do workout.find({title: 'Bench Press'} 
                                                                        // which finds all workouts with title 'Bench Press')
        res.status(200).json(workouts); // send back all workouts
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

// get single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params; // get the id from the route parameters
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // check if the id is a valid mongodb id 
        return res.status(404).json({error: 'Workout ID does not exist'}); // if not, send back an error, return to exit the function
    }
    try {
        const workout = await Workout.findById(id); // find the workout with the id
        if (!workout) {
            return res.status(404).json({error: 'Workout not found'}); // if no workout is found, send back an error, return to exit the function
        }

        // Workout is found
        res.status(200).json(workout); // send back the workout
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params; // get the id from the route parameters
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // check if the id is a valid mongodb id
        return res.status(404).json({error: 'Workout does not exist'}); // if no workout is found, send back an error, return to exit the function
    }
    // id is valid, find workout by id and delete it
    try {
        const workout = await Workout.findByIdAndDelete({_id: id}); // find the workout with the id and delete it

        if (!workout) {
            return res.status(404).json( {error: 'Workout not found'} ); // if no workout is found, send back an error, return to exit the function
        }
        // workout is found and deleted
        res.status(200).json({workout: workout.title, mssg: 'Workout deleted successfully'}); // send back a success message

    } catch (error) {
        res.status(400).json({error: error.message}); // send back an error message
    }
};

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params; // get the id from the route parameters

    if (!mongoose.Types.ObjectId.isValid(id)) {
        // check if the id is a valid mongodb id
        return res.status(404).json({error: 'Workout ID does not exist'}); // if no workout is found, send back an error, return to exit the function
    }
    
    // id is valid, find workout by id and update it
    try {
        const workout = await Workout.findByIdAndUpdate({_id: id}, {...req.body}); // find the workout with the id and update it
        if (!workout) {
            return res.status(404).json({error: 'Workout not found'}); // if no workout is found, send back an error, return to exit the function
        }
        res.status(200).json({workout: workout.title, mssg: 'Workout updated successfully'}); // send back a success message

    } catch (error) {
        res.status(400).json({error: error.message}); // send back an error message
    }

};

module.exports = {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
    
}
