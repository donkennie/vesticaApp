const express = require('express'); 
const {createNewNote, deleteNote, getAllNotes, getNoteById, editNote} = require("../controllers/noteController")

const router = express.Router();

router.get('/notes', getAllNotes)

router.post('/notes', createNewNote)
router.get('/notes', getNoteById)
router.put('/notes', editNote)
router.delete('/notes', deleteNote);

module.exports = router;