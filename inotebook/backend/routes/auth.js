const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are errors in the request body, return a 400 status with the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
//checking whether user with this email already exists
    try {
      let existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      console.log("Hashed Password:", hashedPassword);
//creating a new user
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      const savedUser = await user.save();

      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error saving user:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
