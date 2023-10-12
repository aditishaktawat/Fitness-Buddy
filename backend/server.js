//first we will create package.json file
// for doing so first we will cd backend 
// 2. cpm init -y   it will create a empty required package.json file 
// 3. now we need to create express package to create express app by doing  npm install express
// 4. now create express application Here in ServiceWorkerContainer.js 

require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// create a express app using express function
const app = express()
app.use(cors());

// Allow specific origin(s)
app.use(cors({
  origin: 'https://fitness-buddy-kappa.vercel.app'
}));

//creating middleware
app.use(express.json())

app.use((req, res, next) => {
   console.log(req.path, req.method) 
   next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    // listen for requests with specific port number
    app.listen(process.env.PORT, () =>{
        console.log('Connected to db and Listening on port' , process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 })





// ctrl + c to come out of the running process 
// we dont want to run the node file again n again so we will intsall nodemon 
// npm intsall -g nodemon - to intsall globally  and then run nodemon server.js (keeo in mind that you should be inside the backende server before running it)

// .env is the package that is intsalled so that env file can be loaded in th process 

// middleware anything that executes between us getting request on the server or sending respose 
