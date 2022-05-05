import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { getSingleNotebook } from "../../store/notebook";
import Sidebar from "../SidebarPage";

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

  useEffect(() => {
    dispatch(getSingleNotebook(notebookId))
  }, [dispatch])

  return (
    <div className="notebook-container">
      <h1>hello from Notebook</h1>
      <Sidebar notebooks={uniqueNotebooks}/>
      <div className="notes-content">
        <h2>{singleNotebook?.title}</h2>
      </div>
    </div>
  )
}

export default Notebook;
