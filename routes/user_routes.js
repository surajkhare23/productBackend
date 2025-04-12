const userController = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.post("/user", userController.addUser);
router.get("/user", userController.getUsers);
router.patch("/user/:id", userController.updateEmail);


module.exports = router;
