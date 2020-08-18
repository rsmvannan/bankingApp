const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
  loanType: { type: String, required: true },
  loanAmount: { type: String, required: true },
  loanDate: { type: String, required: true },
  rateOfInterest: { type: String, required: true },
  loanDuration: { type: String, required: true },
});

module.exports = mongoose.model("Loan", loanSchema);
