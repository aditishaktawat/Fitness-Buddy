const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

//attach handler to this
// get all workouts
router.get('/api/workouts', getWorkouts)

// get a single workouts
router.get('/api/workouts/:id', getWorkout)

// post a new workout
router.post('/api/workouts', createWorkout)

// delete a workout
router.delete('/api/workouts/:id', deleteWorkout)

// UPDATE a workout
router.patch('/api/workouts/:id', updateWorkout)


// ??export router 
module.exports = router
