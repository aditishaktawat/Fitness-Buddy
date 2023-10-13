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


const app = express()

app.use(cors({
  origin: ["https://fitness-buddy-kappa.vercel.app"],
  methods: ["POST" , "GET"],
  credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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





 
