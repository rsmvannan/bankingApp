const express = require("express");
const router = express.Router();

const User = require("../models/user");

// router.get('/user')
router.get("/", (req, res, next) => {
  // console.log("in api");
  User.find().then((result) => {
    // console.log(result);
    res.status(200).send(result);
    // return result;  });
    // res.status(200).send(fetchUser());
  });
});

module.exports = router;
