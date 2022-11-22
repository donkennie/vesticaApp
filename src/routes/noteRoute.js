const express = require('express'); 
const {createNewNote, deleteNote, getAllNotes, getNoteById, editNote} = require("../controllers/noteController")
const {checkForUserValidation, validateAdmin} = require("../middleware/authenticator")

const router = express.Router();

router.get('/', checkForUserValidation, getAllNotes)

router.post('/', checkForUserValidation, createNewNote)
router.get('/id', checkForUserValidation,  getNoteById)
router.put('/id',checkForUserValidation, validateAdmin, editNote)
router.delete('/id',checkForUserValidation, validateAdmin, deleteNote);

module.exports = router;