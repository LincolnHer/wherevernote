import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../../store/notes';
import './Note.css'

function Note({ notebooks, notes }) {
  const { notebookId } = useParams();
  // console.log(notebookId)
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notebook, setNotebook] = useState(notebookId);
  // console.log(notebook)
  const [errors, setErrors] = useState([]);
  const notebooksArr = Object.values(notebooks)


  const submit = async (e) => {
    e.preventDefault();

    const formValues = {
      userId: sessionUser.id,
      notebookId: notebook,
      title: title,
      content: content,
    }

    console.log(formValues)

    const note = await dispatch(createNote(formValues));
    history.push(`/notebooks/${notebook}`)
    setTitle('');
    setContent('');
    setNotebook(notebookId);
  };

  useEffect(() => {
    const validationErrors = [];
    if (!title.length) validationErrors.push('Your note name must contain at least one character');
    if (title.length > 50) validationErrors.push("Your note name cannot be longer than 50 characters");
    if (content.length < 1) validationErrors.push("Your note must contain atleast 1 character")
    if (!notebook) validationErrors.push('You must select a notebook')
    setErrors(validationErrors);

    return

  }, [title, content]);

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
              <select
                name="notebookId"
                onChange={(e) => setNotebook(e.target.value)}
                value={notebookId}
              >
                <option value='' >choose a notebook...</option>
                {notebooksArr?.map(notebook => (
                  <option key={notebook?.id} value={notebook?.id}>
                    {notebook?.title}
                  </option>
                ))}
              </select>
            </div>
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
            <button className='btn' disabled={errors.length > 0} type='submit'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Note
