const User = require("../models/users");
const response = require("../utilities/response");

module.exports.addUser = async function (req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return response(res, 400, "name email password feilds are required");
  }
  try {
    let user = new User({ name, email, password });
    await user.save();
    return response(res, 201, "User successfully added", user);
  } catch (e) {
    console.error(e);
    if (e.code == 11000) {
      return response(res,500,"Email already exists");
    }
    return response(res, 500,"Internal Server error");
  }
};

module.exports.getUsers = async function (req, res) {
  try {
    let users = await User.find();
    if (!users) {
      res.status(404).json({ message: "users not found" });
    } else {
      res
        .status(200)
        .json({ message: "users successfully fetched", data: users });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error", error: e });
  }
};

module.exports.updateEmail = async function (req, res) {
  let id = req.params.id;
  let email = req.body.email;

  if (!id) {
    res.status(400).json({ message: "Id is missing in path params" });
  }
  if (!email) {
    res.status(400).json({ message: "email is reuired" });
  }

  try {
    let user = await User.findByIdAndUpdate(id, { email }, { new: true });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      res
        .status(200)
        .json({ message: "email successfully updated", data: user });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};


