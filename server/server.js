require('dotenv').config({path:'.env'})
const connected = require('./database/connection')
const express = require('express')
const cors = require('cors')
const router = require('./routes/api')

// load database
connected()

// set up app
const app = express() 

// set up port 
const PORT = process.env.PORT || 8080 

app.use(express.static("public"))
app.use(cors({ origin: '*' }))  
app.use(express.json({limit: '1mb'}))
app.use( express.urlencoded({ extended: true }))

// load router 
app.use('/api', router)

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})