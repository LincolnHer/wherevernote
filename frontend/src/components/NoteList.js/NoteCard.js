import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/ModalContext";
import EditNoteForm from "../CreateNotebookModal/EditNoteForm";
import { deleteNote } from "../../store/notes";

function NoteCard({ note }) {
  const dispatch = useDispatch();
  const [noteId, setnoteId] = useState(note.id);
  const notes = useSelector((state) => state.notes);
  const createdAt = new Date(note?.createdAt);
  const singleNote = notes[noteId];
  const convertedDate = createdAt.toDateString();
  const {
    modalIsOpen3,
    setModalIsOpen3,
    setModal3IsOpenToFalse,
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

  const handleDelete = async () => {
    const oldNote = await dispatch(deleteNote(singleNote));
  };

  // useEffect(() => {
  //   return;
  // }, [noteId]);

  return (
    <>
      <div
        className="note-card"
        onClick={() => {
          setnoteId(note?.id);
          localStorage.setItem("note", note?.id);
        }}
      >
        <div className="note-card-head">
          <div className="note-card-id">note {note?.id}</div>
          <div className="note-card-title">{note?.title}</div>
          <div className="note-card-desc ">{note?.content}</div>
          <div className="btn-box">
            <button
              className="btn-blue"
              onClick={() => {
                setModalIsOpen3(true);
              }}
            >
              Edit Note
            </button>
            <button className="btn-red-card" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="note-card-date">{convertedDate}</div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen3} style={customStyles}>
        <button onClick={setModal3IsOpenToFalse} className="btn-red">
          x
        </button>
        {/* {modalName === 'editNote' ? <EditNoteForm /> : <EditNotebookModal />} */}
        <EditNoteForm />
      </Modal>
    </>
  );
}

export default NoteCard;
