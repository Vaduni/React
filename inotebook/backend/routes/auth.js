const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");  

// Replace with env var in production
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
// Route 1: Create a user using POST "/api/auth/createuser". No login required
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
      await user.save();
      const data={
        user:{
            id: user.id
        }
      }
const authToken =jwt.sign(data,JWT_SECRET );
      res.json({ authToken }); 
    } catch (error) {
      console.error("Error saving user:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
//Route 2: Authenticate a user using POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ], async (req, res) => {
    //if there are errors , return a 400 status with errors
 const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    const { email, password } = req.body; 
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id
        }
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error("Error logging in user:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
  