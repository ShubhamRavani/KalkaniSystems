const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./db/dbConnect");
const userRoutes = require("./routes/userRoute");

const app = express();

//DB
dbConnect();

//Middleware
app.use(express.json());

//Users route
app.use("/api/users", userRoutes);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
