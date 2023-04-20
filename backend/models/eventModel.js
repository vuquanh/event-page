import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zip: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
})

const eventSchema = mongoose.Schema({
    name: {
        type: String, 
        required:true
    },
    image: {
        type: String,
        required: true
    },
    dateTime: { //I will change the date type from String to Date later.
        type:String,
        required: true
    },
    location: {
        type: AddressSchema,
        required:true 
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    fee: {
        type: number,
        required: true
    },
    openSpots: {
        type: number
    }
},
{
    timestamps: true
  }
)

const Event = mongoose.model('events', eventSchema)
export default Event