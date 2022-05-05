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
      },
      order: [
          ['createdAt', 'DESC']
      ]
  })

  return res.json(notebooks);
}));

// GET all notes for a single notebook
router.get('/:notebookId/notes', asyncHandler(async(req, res) => {
  const notebookId = req.params.notebookId

  const notes = await Note.findAll({
      where: {
        notebookId: notebookId
      },
      order: [
          ['createdAt', 'DESC']
        ]
  });

  return res.json(notes);
}));

// POST create a notebook
router.post('/', asyncHandler(async(req, res) => {
  const { title, userId } = req.body
  const notebook = await Notebook.create({
    title: title,
    userId: userId,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return res.json(notebook)
}));

// PUT edit a notebook
router.put('/notebook/:notebookId', asyncHandler(async(req,res) => {
  const notebookId = req.params.notebookId

  const { title } = req.body

  const notebook = await Notebook.findByPk(notebookId)

  const newNotebook = await notebook.update({ title: title })

  return res.json(newNotebook)
}));

// DELETE delete a notebook
router.delete('/notebook/:notebookId', asyncHandler(async(req, res) => {
  const notebookId = req.params.notebookId

  const notebook = await Notebook.findByPk(notebookId)
  const userId = notebook.userId
  notebook.destroy()

  const notebooks = await Notebook.findAll({
      where: {
        userId: userId,
      }
  })

  return res.json(notebooks)
}));

//GET a single notebook
router.get('/notebook/:notebookId', asyncHandler(async(req, res) => {
  const notebookId = req.params.notebookId

  const notebook = await Notebook.findByPk(notebookId)

  return res.json(notebook)
}))

module.exports = router
