const express = require('express');
const Workout = require('../models/WorkoutModel');
const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController');
// create router
const router = express.Router();

// add all of the diff request handlers onto router, then export at the end
// get all workouts
router.get('/', getWorkouts);


// get single workout
router.get('/:id', getSingleWorkout);


// Post new workout
router.post('/', createWorkout);

// Delete workout (id represents the workout id)
router.delete('/:id',deleteWorkout);

// Update workout (id represents the workout id)
router.patch('/:id', updateWorkout);











module.exports = router;

