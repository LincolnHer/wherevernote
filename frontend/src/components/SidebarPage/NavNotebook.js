import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useModal } from "../../context/ModalContext"
import Modal from 'react-modal'
import CreateNotebookModal from "../CreateNotebookModal"
import EditNotebookModal from "../CreateNotebookModal/EditNotebookForm";
import './Sidebar.css'

Modal.setAppElement('#root');

function NavNotebook({ notebooks }) {
  const notebooksArr = Object.values(notebooks)
  const { modalIsOpen, setModalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse, modalName, setModalName } = useModal();
  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'black',
      color: 'white'
    }
};

//   console.log(notebooksArr)

  return (
    <ul>
      <div>
        {notebooksArr?.length > 0 && notebooksArr?.map((notebook) => (
          <li key={notebook.id}
          className="nav-links"
          >
            <NavLink
            to={`/notebooks/${notebook.id}`}
            style={{color: 'white', textDecoration: 'none'}}
            >
                {notebook.title}
            </NavLink>
          </li>
        ))}
        <li
        className="nav-links new"
        onClick={() => {setModalIsOpen(true); setModalName('create');}}
        >
          New Notebook
        </li>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <button className="btn-red" onClick={setModalIsOpenToFalse}>x</button>
          {modalName === 'edit' ? <EditNotebookModal /> : <CreateNotebookModal />}
        </Modal>
      </div>
    </ul>
  )
}

export default NavNotebook
