import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'
import { getSingleNotebook } from "../../store/notebook";
import { useModal } from "../../context/ModalContext";
import Sidebar from "../SidebarPage";
import EditNotebookModal from "../CreateNotebookModal/EditNotebookForm";

function Notebook() {
  const dispatch = useDispatch();
  const { notebookId } = useParams();
  // const sessionUser = useSelector(state => state.session.user);
  const notebookObj = useSelector(state => state.notebooks)
  const notebook = useSelector(state => state.notebooks.notebook)
  const notebooksArr = Object.values(notebookObj);
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
      backgroundColor: 'white'
    }
};

  // useEffect(() => {
  //   dispatch(getSingleNotebook(notebookId))
  // }, [dispatch])

  return (
    <div className="notebook-container">
      <h1>hello from Notebook</h1>
      <Sidebar notebooks={uniqueNotebooks}/>
      <div className="notes-content">
        <h2>{singleNotebook?.title}</h2>
        <h3
          onClick={() => {setModalIsOpen(true); setModalName('edit');}}
          >
          Edit Notebook
        </h3>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <button onClick={setModalIsOpenToFalse}>x</button>
          <EditNotebookModal />
        </Modal>
      </div>
    </div>
  )
}

export default Notebook;
