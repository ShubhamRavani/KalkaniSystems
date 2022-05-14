const express = require("express");
const {
    userRegisterCtrl,
    fetchUsersCtrl
} = require("../controller/usersCtrl");

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
userRoutes.get("/user", fetchUsersCtrl);

module.exports = userRoutes;
