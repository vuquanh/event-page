import mongoose from "mongoose"; 


const connectDB = aysnc () => {

try{
   const conn = await mongoose.connect(process.env. MONGO_URI, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }) //the process is part of the thread of execution. This line provides the connection to the database in the cloud

    console.log('MongoDB Connected: ${conn.connection.host}') //this will give us the location of the virtual machine in the cloud (server)
    } catch(error){
      console.error('Error: ${error.message}') //error has a message property so you can see whats going wrong
      process.exit(1)
    }
}

export default connectDB