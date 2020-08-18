// const userDetails = () => {
const User = require("../models/user");
const userdata = require("../data/userdata");

const registerUser = () => {
  const registerUser = new User(userdata);
  registerUser.save();
  return registerUser;
};

//   app.post("/registration", (req, res) => {
// const registerUser = new User(userdata);
// registerUser.save();
//     res.send("post request");
//   });

//   app.put("/user", (req, res) => {
//     res.send("put request");
//   });
// };

module.exports = registerUser;
