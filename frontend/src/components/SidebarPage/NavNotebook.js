import { NavLink, useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import Modal from "react-modal";
import CreateNotebookModal from "../CreateNotebookModal";
import "./Sidebar.css";

Modal.setAppElement("#root");

function NavNotebook({ notebooks }) {
  const { notebookId } = useParams();
  const notebooksArr = Object.values(notebooks);
  // const handleClick = () => {
  //   localStorage.setItem('notebook', notebookId)
  // }
  const {
    modalIsOpen1,
    setModalIsOpen1,
    setModal1IsOpenToFalse,
  } = useModal();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <>
      <ul>
        <div>
          {notebooksArr?.length > 0 &&
            notebooksArr?.map((notebook) => (
              <li
              key={notebook.id}
              className="nav-links"
              >
                <NavLink
                  to={`/notebooks/${notebook.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                  // onClick={() => handleClick()}
                >
                  {notebook.title}
                </NavLink>
              </li>
            ))}
            <li
              className="nav-links new"
              onClick={() => {
                setModalIsOpen1(true);
              }}
            >
              New Notebook
            </li>
        </div>
      </ul>
      <Modal isOpen={modalIsOpen1} style={customStyles}>
        <button className="btn-red" onClick={setModal1IsOpenToFalse}>
          x
        </button>
        {/* {modalName === 'create' ? <CreateNotebookModal />: null} */}
        <CreateNotebookModal />
      </Modal>
    </>
  );
}

export default NavNotebook;
