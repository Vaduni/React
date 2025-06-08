const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1:get all notes using Get "/api/auth/getuser" .Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try{
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

//Route 2:Add a new note using Post "/api/auth/addnote" .Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if there are errors,retur a statud 400 with the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const notes = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await notes.save();
      res.json(savedNotes);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
