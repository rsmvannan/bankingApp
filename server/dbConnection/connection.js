const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://user:useruser@cluster0.njx6c.mongodb.net/test")
  .then(() => {
    console.log("db connected...");
  });

module.exports = mongoose;
