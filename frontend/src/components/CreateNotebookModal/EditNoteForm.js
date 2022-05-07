import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useModal } from "../../context/ModalContext";
import { editNote } from '../../store/notes'

function EditNoteForm() {

  const { notebookId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const notebooksObj = useSelector(state => state.notebooks)

  const [oldTitle, setOldTitle] = useState()
  const [oldContent, setOldContent] = useState('')
  const [oldNotebook, setOldNotebook] = useState(notebookId);

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notebook, setNotebook] = useState(notebookId);

  const [errors, setErrors] = useState([]);
  const notebooksArr = Object.values(notebooksObj)
  const { setModalIsOpen3, setModal3IsOpenToFalse } = useModal();

  const submit = async (e) => {
    e.preventDefault();
    setModal3IsOpenToFalse()
    const  formValues = {
      userId: sessionUser.id,
      notebookId: title,
      title: content,
      content: notebook,
    }
  }

return (
    <div className="notebook-modal">
        <header>
        <h1>Create new notebook</h1>
        <h2>Notebooks are useful to help you keep track of information of similar topics.</h2>
        </header>
        <form
        className='notebook-form'
        onSubmit
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
            <button type='button' onClick={setModal3IsOpenToFalse} className='btn-red'>Cancel</button>
            <button type='submit' className='btn' disabled={errors.length >0}>Create</button>
        </div>
        </form>
    </div>
    )
}

export default EditNoteForm;

