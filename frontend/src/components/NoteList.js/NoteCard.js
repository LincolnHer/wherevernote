import { useState } from "react";
// import Modal from "react-modal";
import parse from 'html-react-parser'
import { useDispatch, useSelector } from "react-redux";
// import { useModal } from "../../context/ModalContext";
// import EditNoteForm from "../CreateNotebookModal/EditNoteForm";
import { deleteNote } from "../../store/notes";
import { useHistory } from "react-router-dom";

function NoteCard({ note, setSelectedNoteId }) {
  const dispatch = useDispatch();
  const [noteId, setNoteId] = useState(note?.id);
  const history = useHistory()

  const notes = useSelector((state) => state.notes);
  const createdAt = new Date(note?.createdAt);
  const singleNote = notes[noteId];
  // console.log(singleNote)
  const convertedDate = createdAt.toDateString();

  // const {
  //   modalIsOpen3,
  //   setModalIsOpen3,
  //   setModal3IsOpenToFalse,
  // } = useModal();

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     backgroundColor: "black",
  //     color: "white",
  //   },
  // };

  const handleDelete = async () => {
    const oldNote = await dispatch(deleteNote(singleNote));
    localStorage.removeItem("note")
    setSelectedNoteId("")
  };

  return (
    <>
      <div
        className={`note-card ${note?.id}`}
        onClick={() => {
          setNoteId(note?.id);
          localStorage.setItem("note", note?.id);
          // localStorage.setItem("notebook", singleNote?.notebookId)
          setSelectedNoteId(note?.id)
          history.push(`/notebooks/${singleNote?.notebookId}`)
        }}
      >
        <div className="note-card-head">
          <div className="note-card-id">note {note?.id}</div>
          <div className="note-card-title">{note?.title}</div>
          <div className="note-card-desc ">{parse(note?.content)}</div>
          <div className="btn-box">
            {/* <button
              className="btn-blue"
              onClick={() => {
                setModalIsOpen3(true);
              }}
            >
              Edit Note
            </button> */}
            <button className="btn-red-card" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="note-card-date">{convertedDate}</div>
        </div>
      </div>
      {/* <Modal isOpen={modalIsOpen3} style={customStyles}>
        <button onClick={setModal3IsOpenToFalse} className="btn-red">
          x
        </button> */}
        {/* {modalName === 'editNote' ? <EditNoteForm /> : <EditNotebookModal />} */}
        {/* <EditNoteForm /> */}
      {/* </Modal> */}
    </>
  );
}

export default NoteCard;
