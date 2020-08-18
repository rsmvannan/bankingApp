const express = require("express");
const router = express.Router();

const Loan = require("../models/loan");

// router.get('/user')
router.post("/", (req, res, next) => {
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

module.exports = router;
