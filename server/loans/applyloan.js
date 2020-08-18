const Loan = require("../models/loan");
const loandata = require("../data/loandata");

const applyloan = (addloan) => {
  console.log("loan");
  // const addloa = new Loan(loandata);
  addloan.save();
  return addloan;
};

module.exports = applyloan;
