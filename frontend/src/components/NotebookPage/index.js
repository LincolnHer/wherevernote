import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from 'react-router-dom'
import Modal from 'react-modal'
import { getNotebooks } from "../../store/notebook";
import { getNotes } from "../../store/notes";
import { useModal } from "../../context/ModalContext";
import Sidebar from "../SidebarPage";
import EditNotebookModal from "../CreateNotebookModal/EditNotebookForm";
import Note from "../Note";
import NoteCard from "../NoteList.js/NoteCard";
import './NotebookPage.css'
import EditNoteForm from "../CreateNotebookModal/EditNoteForm";


function Notebook() {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const notebooksObj = useSelector(state => state?.notebooks)
  const notebooksArr = Object.values(notebooksObj);
  const notesObj = useSelector(state => state?.notes)
  const notesArr = Object.values(notesObj)
  const filteredNotes = notesArr?.filter(note => note?.notebookId === +notebookId)
  filteredNotes.reverse();
  const singleNotebook = useSelector(state => state.notebooks[notebookId])
  const { modalIsOpen2, setModalIsOpen2, setModal2IsOpenToTrue, setModal2IsOpenToFalse, modalName, setModalName } = useModal();
  
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

  useEffect(() => {
    if (!sessionUser?.id) return
    dispatch(getNotebooks(sessionUser?.id))
    dispatch(getNotes(sessionUser?.id))


  }, [dispatch])

if (!sessionUser) {
  return <Redirect to="/" />
  }

  return (
    <>
    <div className="home-page-content">
      <Sidebar notebooks={notebooksObj}/>
      <div className='note-list'>
      <div className='note-list-header'>
        <div className='note-list-title'>
            <h1 className='note-h1'>
              {singleNotebook?.title}
            </h1>
        </div>
        <div className='note-list-sub-header'>
          <div className='note-count'>
          <button
            onClick={() => {setModalIsOpen2(true);}}
            className="btn-blue"
          >
            Edit Notebook
          </button>
          </div>
        </div>
      </div>
      <div className='note-list-body'>
      {filteredNotes?.map(note => (
          <NoteCard key={note?.id} note={note}/>
        ))}
      </div>
    </div>
    <Note notebooks={notebooksObj} notes={notesObj} />
    </div>
    <Modal isOpen={modalIsOpen2} style={customStyles}>
      <button onClick={setModal2IsOpenToFalse} className="btn-red">x</button>
      {/* {modalName === 'edit' ? <EditNotebookModal /> : <EditNoteForm />} */}
      <EditNotebookModal />
    </Modal>
  </>
  )
}

export default Notebook;
