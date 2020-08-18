const express = require("express");
const router = express.Router();

const Loan = require("../models/loan");

// router.get('/user')
router.get("/", (req, res, next) => {
  //   console.log("in api");
  Loan.find().then((result) => {
    // console.log(result);
    res.send(result);
  });
  // res.status(200).send(fetchUser());
});

module.exports = router;
