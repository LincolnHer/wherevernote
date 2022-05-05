import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useModal } from "../../context/ModalContext"
import { createNotebook } from '../../store/notebook'


function CreateNotebookModal() {
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [errors, setErrors] = useState([])
  const { setModalIsOpenToFalse } = useModal();

  useEffect(() => {
    const validationErrors = []
    if (!title.length) validationErrors.push('Your notebook name must contain at least one character')
    if (title.length > 50) validationErrors.push("Your notebook name cannott be longer than 50 characters")
    setErrors(validationErrors);
  }, [title])

  return (
  <div className="create-notebook">
    <header>
      <h1>Create new notebook</h1>
      <h2>Notebooks are useful to help you keep track of information of similar topics.</h2>
    </header>
    <form>
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
