const express = require('express'); 
const {createNewNote, deleteNote, getAllNotes, getNoteById, editNote} = require("../controllers/noteController")

const router = express.Router();

router.get('/', getAllNotes)

router.post('/', createNewNote)
router.get('/id', getNoteById)
router.put('/id', editNote)
router.delete('/id', deleteNote);

module.exports = router;