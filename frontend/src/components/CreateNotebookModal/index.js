import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from "../../context/ModalContext"
import { createNotebook } from '../../store/notebook'


function CreateNotebookModal() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const [title, setTitle] = useState('')
  const [errors, setErrors] = useState([])
  const { setModalIsOpenToFalse } = useModal();

  const submit = async (e) => {
    e.preventDefault();
    setModalIsOpenToFalse();
    const formValues = {
      title: title,
      userId: sessionUser.id
    }

    const notebook = await dispatch(createNotebook(formValues));

  };

  useEffect(() => {
    const validationErrors = [];
    if (!title.length) validationErrors.push('Your notebook name must contain at least one character');
    if (title.length > 50) validationErrors.push("Your notebook name cannot be longer than 50 characters");
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
      <button type='button' onClick={setModalIsOpenToFalse} >Cancel</button>
      <button type='submit'>Create</button>
    </form>
  </div>
  )
}

export default CreateNotebookModal
