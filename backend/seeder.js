import dotenv from "dotenv";
import events from "./data/events.js";
//import users sample data later
import Event from "./models/eventModel.js";
//import User model later

import connectDB from "./config/db.js";

dotenv.config(); //this command lets us have access to .env file
connectDB(); //this will connect to database and will print out the host if there is a successful connection.

const importData = async () => {
  try {
    //we are deleting existing data in MongoDB first before insering new ones.
    //when deleting data, you need to delete the child data first which is Event in this case.
    await Event.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); //when inserting new data, you have to insert the parent data first which is User in this case.
    const adminUser = createdUsers[0].id; // save admin user to a variable so that you can add the admin user to a Event collection data later.

    // adding 'user:adminUser' to each object in the events sample data by using map function.
    const sampleEvents = events.map((event) => {
      return { ...events, user: adminUser };
    });

    await Event.insertMany(sampleEvents);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

const destroyData = async () => {
  try {
    await Event.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); //?? check later
  }
};

//argv stands for argument vector. process.argv is a command for node.js.
// "data:destroy": "node backend/seeder.js -d" --- "node" is index 0,  "backend/seeder.js" is index 1,  "-d" is index 2
// If there is an index 2 and the value at index 2 is equal to '-d', then the destroyData function will be executed. Otherwise, the importData function will be executed.
if(process.argv[2] === '-d') { 
    destroyData();
} else {
    importData();
}