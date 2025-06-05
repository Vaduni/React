const express = require('express');
const router = express.Router();
const User = require('../models/user');

//create a user using: POST "/api/auth/createuser". No login required
router.post('/', (req, res) => {
	console.log(req.body);
    const user=User(req.body);
    user.save();
	res.send("Hello");
});

module.exports = router;
