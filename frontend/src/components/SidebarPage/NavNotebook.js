import { NavLink } from "react-router-dom"
import { useModal } from "../../context/ModalContext"
import Modal from 'react-modal'
import CreateNotebookModal from "../CreateNotebookModal"

Modal.setAppElement('#root');

function NavNotebook({ notebooks }) {
  const notebooksArr = Object.values(notebooks)
  const { modalIsOpen, setModalIsOpen, setModalIsOpenToTrue, setModalIsOpenToFalse } = useModal();
  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white'
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
        onClick={setModalIsOpenToTrue}
        >
          New Notebook
        </li>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <button onClick={setModalIsOpenToFalse}>x</button>
          <CreateNotebookModal />
        </Modal>
      </div>
    </ul>
  )
}

export default NavNotebook
