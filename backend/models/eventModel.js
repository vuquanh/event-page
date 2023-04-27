import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
  user: {
    type:mongoose.Schema.Types.ObjectID,
    ref:'users',
    required: true
  },
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
    zip: {
      type: Number,
      required: true,
    }
});

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    dateTime: {
      //I will change the date type from String to Date later.
      type: String,
      required: true,
    },
    location: {
      type: AddressSchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    openSpots: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("events", eventSchema); 
export default Events;
//Event is for the name we use in this application but "events" is the name of database in MongoDB. 
//const "name for this project file" = mongoose.model("the name for collection in MongoDB", eventSchema)