import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import { getSingleNotebook } from "../../store/notebook";
import { useModal } from "../../context/ModalContext";
import Sidebar from "../SidebarPage";
import EditNotebookModal from "../CreateNotebookModal/EditNotebookForm";
import Note from "../Note";


function Notebook() {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  const notebookObj = useSelector(state => state.notebooks)
  const notebook = useSelector(state => state.notebooks.notebook)
  const notebooksArr = Object.values(notebookObj);
  // console.log('notebook state', notebooksArr)
  const singleNotebook = useSelector(state => state.notebooks[notebookId])
  // console.log(singleNotebook)
  const uniqueNotebooks = [...new Map(notebooksArr.map(notebook => [JSON.stringify(notebook), notebook])).values()];
  console.log('no duplicates', uniqueNotebooks)
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

  // useEffect(() => {
  //   dispatch(getSingleNotebook(notebookId))
  // }, [dispatch])

  return (
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
          <h4
            onClick={() => {setModalIsOpen(true); setModalName('edit');}}
          >
            Edit Notebook
          </h4>
          </div>
        </div>
      </div>
      <div className='note-list-body'>
        <div className='note-card'>
          <div className='note-card-head'>
            <div className='note-card-title'>
              note title
            </div>
            <div className='note-card-desc '>
              some description
            </div>
          </div>
          <div className='note-card-date'>
            date
          </div>
        </div>
      </div>
    </div>
    <Note />
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <button onClick={setModalIsOpenToFalse} className="btn-red">x</button>
      <EditNotebookModal />
    </Modal>
    </div>
  )
}

export default Notebook;
