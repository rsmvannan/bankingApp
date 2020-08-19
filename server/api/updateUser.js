const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.put("/", (req, res) => {
  const updatedValues = req.body.state;
  User.update(
    { _id: req.body.state.id },
    {
      $set: {
        name: updatedValues.name,
        address: updatedValues.address,
        zip: updatedValues.zip,
        state: updatedValues.state,
        country: updatedValues.country,
        email: updatedValues.email,
        pan: updatedValues.pan,
        contactNumber: updatedValues.contactNumber,
        dob: updatedValues.dob,
        accountType: updatedValues.accountType,
      },
    }
  )
    .exec()
    .then(() => {
      res.status(200).send("updated");
    });
});

module.exports = router;
