const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/", (req, res) => {
  const userData = req.body.state;
  const registerUser = {
    name: userData.name,
    userName: userData.userName,
    address: userData.address,
    zip: userData.zip,
    state: userData.state,
    country: userData.country,
    email: userData.email,
    pan: userData.pan,
    contactNumber: userData.contactNumber,
    dob: userData.dob,
    accountType: userData.accountType,
  };
  const data = new User(registerUser);
  data.save();
  // return registerUser;
  res.status(200).send(registerUser);
});

module.exports = router;
