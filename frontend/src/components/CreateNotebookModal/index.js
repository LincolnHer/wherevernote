import { useState } from 'react'
import { useModal } from "../../context/ModalContext"

function CreateNotebookModal() {
    const [title, setTitle] = useState('')
    const { modalIsOpen, setModalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse } = useModal();

  return (
  <div className="create-notebook">
    <header>
      <h1>Create new notebook</h1>
      <h2>Notebooks are useful to help you keep track of information of similar topics.</h2>
    </header>
    <form>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Notebook name'
        name='title'
      >
      </input>
      <button type='button' onClick={setModalIsOpenToFalse} >Cancel</button>
      <button type='submit'>Create</button>
    </form>
  </div>
  )
}

export default CreateNotebookModal
