const mongoose = require("mongoose");

//Creating Teacher Schema

const userSchema = new mongoose.Schema(
    {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        mobileNo: {
            type: String,
            unique: true,
        },
        birthDate: {
            type: Date,
        },
        address: [
            {
               address1: { type: String},
               address2: { type: String},
               pincode: { type: String},
               city: { type: String},
               state: { type: String},
               typeHO: { type: String},
            },
        ],
            
       
    },
    {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;