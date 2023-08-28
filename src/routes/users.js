const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.logIn);
//
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;
