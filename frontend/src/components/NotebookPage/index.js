import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import { getNotebooks } from "../../store/notebook";
import { getNotes } from "../../store/notes";
import { useModal } from "../../context/ModalContext";
import Sidebar from "../SidebarPage";
import EditNotebookModal from "../CreateNotebookModal/EditNotebookForm";
import Note from "../Note";
import NoteCard from "../NoteList.js/NoteCard";
import './NotebookPage.css'


function Notebook() {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const notebookObj = useSelector(state => state?.notebooks)
  const notebooksArr = Object.values(notebookObj);
  const notesObj = useSelector(state => state?.notes)
  const notesArr = Object.values(notesObj)
  const filteredNotes = notesArr?.filter(note => note?.notebookId === +notebookId)
  console.log('filtered', filteredNotes)
  // console.log('notebook state', notebooksArr)
  const singleNotebook = useSelector(state => state.notebooks[notebookId])
  // console.log(singleNotebook)
  const uniqueNotebooks = [...new Map(notebooksArr.map(notebook => [JSON.stringify(notebook), notebook])).values()];
  // console.log('no duplicates', uniqueNotebooks)
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

  useEffect(() => {
    dispatch(getNotebooks(sessionUser?.id))
    dispatch(getNotes(sessionUser?.id))
  }, [dispatch])

  return (
    <>
    <div className="home-page-content">
      <Sidebar notebooks={uniqueNotebooks}/>
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
            onClick={() => {setModalIsOpen(true); setModalName('edit');}}
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
    <Note />
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <button onClick={setModalIsOpenToFalse} className="btn-red">x</button>
      <EditNotebookModal />
    </Modal>
    </div>
  </>
  )
}

export default Notebook;
