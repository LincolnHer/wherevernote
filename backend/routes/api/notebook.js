const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router()

const { Notebook, Note } = require('../../db/models')

// GET all notebooks of one user only
router.get('/:userId', asyncHandler(async(req, res) => {
  const userId = req.params.userId
//   console.log(userId)
  const notebooks = await Notebook.findAll({
      where: {
          userId: userId
      }
  })

  return res.json(notebooks);
}));

// GET all notes for a single notebook
router.get('/:notebookId/notes', asyncHandler(async(req, res) => {
  const notebookId = req.params.notebookId

  const notes = await Note.findAll({
      where: {
        notebookId: notebookId
      }
  });

  return res.json(notes);
}));

// POST create a notebook
router.post('/', (req, res) => {

})

// PUT edit a notebook
router.put('/notebook/:notebookId', (req,res) => {

})

// DELETE delete a notebook
router.delete('/notebook/:notebookId', (req, res) => {

})

module.exports = router
