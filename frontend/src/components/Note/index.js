import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, editNote } from '../../store/notes';
import './Note.css'

function Note({ notebooks, notes }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notebookId, setNotebookId] = useState(1)
  // console.log(notebookId)
  const [errors, setErrors] = useState([]);

  const notebooksArr = Object.values(notebooks)
  // console.log(notebooksArr)

  const submit = async (e) => {
    e.preventDefault();

    const formValues = {
      userId: sessionUser.id,
      notebookId: notebookId,
      title: title,
      content: content,
    }

    const note = await dispatch(createNote(formValues));
    history.push(`/notebooks/${notebookId}`)
    setTitle('');
    setContent('');
    setNotebookId(1);
  };

  useEffect(() => {
    const validationErrors = [];
    if (!title.length) validationErrors.push('Your note name must contain at least one character');
    if (title.length > 50) validationErrors.push("Your note name cannot be longer than 50 characters");
    if (content.length < 1) validationErrors.push("Your note must contain atleast 1 character")
    setErrors(validationErrors);
  }, [title, content]);

  useEffect(() => {
    localStorage.getItem('note')
  }, [])

  return (
    <div className='note-container'>
      <div className='note-form'>
        <form
          onSubmit={submit}
        >
          <h1>I am Note component</h1>
        { errors.length > 0 &&
        (<ul className='errors'>
          {errors.map(error => (
          <li key={error}>{error}</li>
           ))}
        </ul>)}
          <div className='note-title'>
            <div className='select-notebook'>
              <p>choose notebook...</p>
              <select
                name="notebookId"
                onChange={(e) => setNotebookId(e.target.value)}
                value={notebookId}
              >
                {notebooksArr?.map(notebook => (
                  <option key={notebook.id} value={notebook.id}>
                    {notebook.title}
                  </option>
                ))}
              </select>
            </div>
            <label>
              title
            </label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Title'
            >
            </input>
          </div>
          <div className='note-body'>
            <textarea
              name='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Start writing'
            >
            </textarea>
          </div>
          <div className='note-actions'>
            <button className='btn' disabled={errors.length >0} type='submit'>Create</button>
          </div>
        </form>
        <div className='note-preview'>
          <div className='note-preview-title'>
            title
          </div>
          <div className='note-preview-body'>
            body
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
