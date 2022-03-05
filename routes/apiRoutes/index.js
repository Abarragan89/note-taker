"use strict";
// set up router
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
let noteData = require('../../db/db.json');

router.post('/notes', (req, res) => {
    console.log("post has been made to server route")
    const note = { title: req.body.title, text: req.body.text }
    note.id = uuidv4();
    console.log(note)
    noteData.push(note)
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(noteData), () => {
        console.log('file has been written');
    });
    res.end();
})
router.get('/notes', (req, res) => {
    res.json(noteData)
})
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    const newDataSet = noteData.filter(obj =>
        obj.id !== id)
    noteData = newDataSet;
    res.json(noteData)

})


module.exports = router;