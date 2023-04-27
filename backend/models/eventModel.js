import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
  name: {
    type: String,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
      type: Number,
      required: true,
    }
  });

const eventSchema = mongoose.Schema({
  user: {
    type:mongoose.Schema.Types.ObjectID,
    ref:'users',
    required: true
  },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    
    },
    date_Time: {
      type: String,
      required: true,
    },
    location: {
      type: AddressSchema,
      required: true,
    },
    company: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
      default: 0
    },
    openSpots: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("events", eventSchema); 
export default Event;
//Event is for the name we use in this application but "events" is the name of database in MongoDB. 
//const "name for this project file" = mongoose.model("the name for collection in MongoDB", eventSchema)