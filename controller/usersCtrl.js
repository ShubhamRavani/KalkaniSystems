const expressAsyncHandler = require("express-async-handler");
const User = require("../model/User");

const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    //Check if user Exist
    const userExists = await User.findOne({ email: req?.body?.email });
  
    if (userExists) throw new Error("User already exists");
    try {
      //Register user
      const user = await User.create({
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        mobileNo: req?.body?.mobileNo,
        birthDate: req?.body?.birthDate,
        address: [{
          address1: req.body.address1,
          address2: req.body.address2,
          pincode: req.body.pincode,
          country: req.body.country,
          city: req.body.city,
          state: req.body.state,
          typeHO: req.body.typeHO,
        }]
      });
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  });

//----------------
//user details
//----------------
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.headers);
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

  module.exports = {
    userRegisterCtrl,
    fetchUsersCtrl
  };