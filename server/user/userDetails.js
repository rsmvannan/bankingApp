// const userDetails = () => {
const User = require("../models/user");

const fetchUser = () => {
  User.find().then((result) => {
    console.log(result);
    return result;
  });
};

const updateUser = () => {
  User.update(
    {
      // username: "user1",
      _id: "5f32dab0c635b5248ced476a",
    },
    {
      $set: { pan: "apqpm1234" },
    }
  );
  return true;
};
//   app.post("/registration", (req, res) => {
//     const registerUser = new User(userdata);
//     registerUser.save();
//     res.send("post request");
//   });

//   app.put("/user", (req, res) => {
//     res.send("put request");
//   });
// };

module.exports = { fetchUser, updateUser };
