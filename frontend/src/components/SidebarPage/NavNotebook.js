import { NavLink } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import Modal from "react-modal";
import CreateNotebookModal from "../CreateNotebookModal";
import "./Sidebar.css";

Modal.setAppElement("#root");

function NavNotebook({ notebooks }) {
  const notebooksArr = Object.values(notebooks);
  const { modalIsOpen1, setModalIsOpen1, setModal1IsOpenToFalse } = useModal();
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
      <ul className="notebooks">
        {/* <div> */}
        {notebooksArr?.length > 0 &&
          notebooksArr?.map((notebook) => (
            <li key={notebook.id} className="nav-links two">
              <div className="link-icon">
                <i className="fa-solid fa-book" />
              </div>
              <div className="nav-note-link">
                <NavLink
                  to={`/notebooks/${notebook.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "13px",
                    display: "block",
                    width: "173px",
                    height: "20px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  activeStyle={{ fontWeight: "bold" }}
                  activeClassName="nav-note-active"
                >
                  {notebook.title}
                </NavLink>
              </div>
            </li>
          ))}
        <li
          className="nav-links new"
          onClick={() => {
            setModalIsOpen1(true);
          }}
        >
          <div className="link-icon">
            <i className="fa-solid fa-book" />
          </div>
          <p className="link-text">New Notebook</p>
        </li>
        {/* </div> */}
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
