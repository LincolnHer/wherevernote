import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useModal } from "../../context/ModalContext"
import { createNotebook } from '../../store/notebook'
import './CreateNotebookModal.css'


function CreateNotebookModal() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const notebooksObj = useSelector(state => state.notebooks)
  const notebooksArr = Object.values(notebooksObj)
  const notebookTitles = notebooksArr.map(notebook => notebook.title)
  // console.log(notebookTitles)
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [errors, setErrors] = useState([])
  const { setModal1IsOpenToFalse } = useModal();
  // const [notebookId, setnotebookId] = useState('')

  const submit = async (e) => {
    e.preventDefault();
    setModal1IsOpenToFalse();
    const formValues = {
      title: title,
      userId: sessionUser.id
    }

    const notebook = await dispatch(createNotebook(formValues));

    // history.push(`/notebooks/${notebook.id}`)
  };

  useEffect(() => {
    const validationErrors = [];
    if (!title.length) validationErrors.push('Your notebook name must contain at least one character');
    if (title.length > 50) validationErrors.push("Your notebook name cannot be longer than 50 characters");
    if (notebookTitles.includes(title)) validationErrors.push(`Notebook name '${title}' is already in use`)
    setErrors(validationErrors);
  }, [title]);

  return (
  <div className="notebook-modal">
    <header>
      <h1>Create new notebook</h1>
      <h2>Notebooks are useful to help you keep track of information of similar topics.</h2>
    </header>
    <form
      className='notebook-form'
      onSubmit={submit}
    >
    <ul className='errors'>
      {errors.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
      <label>
        Name
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Notebook name'
        />
      </label>
      <div className='modal-btns'>
        <button type='button' onClick={setModal1IsOpenToFalse} className='btn-red'>Cancel</button>
        <button type='submit' className='btn' disabled={errors.length >0}>Create</button>
      </div>
    </form>
  </div>
  )
}

export default CreateNotebookModal
