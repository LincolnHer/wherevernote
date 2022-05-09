const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Note } = require('../../db/models');

//ROUTE /api/notes/:userId
//GET all notes of one user only
router.get('/:userId', asyncHandler(async(req, res) => {
  const userId = req.params.userId

  const notes = await Note.findAll({
    where: {
      userId: userId
    },
    order: [
      [ 'updatedAt' , 'DESC']
    ]
  })

  return res.json(notes)
}))

// GET a single note
// ROUTE route /api/notes/note/:noteId
router.get('/note/:noteId', asyncHandler(async(req, res) => {
  const noteId = req.params.noteId

  const note = await Note.findByPk(noteId);

  return res.json(note)
}))

//ROUTE /api/notes/
router.post('/', asyncHandler(async(req, res) => {
  const { userId, notebookId, title, content } = req.body;

  const createNote = await Note.create({
    userId: userId,
    notebookId: notebookId,
    title: title,
    content: content,
  })

  return res.json(createNote)

}))

//ROUTE /api/notes/note/:noteId
//PUT edit a note
router.put('/note/:noteId', asyncHandler(async(req, res) => {
  const noteId = req.params.noteId
  const { title, content, notebookId } = req.body

  const note = await Note.findByPk(noteId);

  const newNote = await note.update({ title: title, content: content, notebookId: notebookId })

  return res.json(newNote)
}))

//DELETE delete a note
router.delete('/note/:noteId', asyncHandler(async(req, res) => {
  const noteId = req.params.noteId
  const note = await Note.findByPk(noteId);
  note.destroy()

  return res.json(note);
}))

module.exports = router;
