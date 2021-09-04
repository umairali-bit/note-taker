// Dependencies
// =============================================================
const path = require('path');
const fs = require('fs');

// Installed node-json.db
const allNotes = require('../../db/db.json');

// Installed express-router
const router = require('express').Router();

// Funtion to create a new note
// =============================================================

function createNewNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

// Funtion to delete a note
// ================================================================

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

// Routes
// ==================================================================

router.get('/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});

module.exports = router;