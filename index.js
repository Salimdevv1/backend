/* eslint-disable no-undef */
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const userRoute = require("./routes/user");
const port = 5000;
var cors = require('cors')
app.use(cors())
app.use(express.json());
require("dotenv").config();

connectDB();

app.use("/api", userRoute);
// eslint-disable-next-line no-unused-vars
app.listen(port, (err, res) => {
  err ? console.log("errr", err) : console.log(`server run on port ${port}`);
});
