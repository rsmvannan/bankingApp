const Loan = require("../models/loan");

function fetchloan() {
  Loan.find().then((result) => {
    console.log(result);
    return result;
  });
}

module.exports = fetchloan;
