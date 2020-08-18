const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  userName: { type: String },
  address: { type: String },
  zip: { type: String },
  state: { type: String },
  country: { type: String },
  email: { type: String },
  pan: { type: String },
  contactNumber: { type: Number },
  dob: { type: Date },
  accountType: { type: String },
});

module.exports = mongoose.model("User", userSchema);
