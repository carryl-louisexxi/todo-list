const mongoose = require('mongoose')

// make connection 
const connectDB = async () => {
    try{
        // mongodb connection string
        const connection =  await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true})
        console.log('MongoDB Connected')
    }catch(error){
        console.log({error: 'MongoDB Connection Error'})
        process.exit(1)
    }
}

module.exports = connectDB 