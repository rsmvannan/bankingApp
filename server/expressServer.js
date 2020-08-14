const express = require("express");
const bodyParser = require("body-parser");
// const User = require("./models/user");
// const userdata = require("./data/userdata");
const applyloan = require("./loans/applyloan");
const mongoose = require("mongoose");
const { fetchUser, updateUser } = require("./user/userDetails");
const fetchloan = require("./loans/fetchloan");
const registerUser = require("./user/registerUser");
const Loan = require("./models/loan");
const User = require("./models/user");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://user:useruser@cluster0.njx6c.mongodb.net/test")
  .then(() => {
    console.log("db connected...");
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("test"));

app.listen(8001);

app.get("/user", (req, res) => {
  User.find().then((result) => {
    console.log(result);
    res.status(200).send(result);
    // return result;
  });
  // res.status(200).send(fetchUser());
});

app.post("/registration", (req, res) => {
  const userData = req.body.state;
  // console.log(userData);
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
  // console.log(registerUser);
  const data = new User(registerUser);
  data.save();
  // return registerUser;
  res.status(200).send(registerUser);
});

app.get("/loan", (req, res) => {
  Loan.find().then((result) => {
    console.log(result);
    res.send(result);
  });
  // const loans = fetchloan();
  // console.log("loans:", loans);
  // res.send(200).send(fetchloan());
});

app.post("/applyloan", (req, res) => {
  console.log(req.body);
  // const addloan = req.body;
  const loanData = {
    loanType: req.body.state.loanType,
    loanAmount: req.body.state.loanAmount,
    rateOfInterest: req.body.state.rateOfInterest,
    loanDate: req.body.state.loanDate,
    loanDuration: req.body.state.loanDuration,
  };
  const addloan = new Loan(loanData);
  addloan.save();
  res.status(200).send(addloan);
});

app.put("/updateuser", (req, res) => {
  console.log("update");
  res.json(updateUser());
});

// app.delete("/", (req, res) => {
//   res.send("delete request");
// });

console.log("server is running...");
