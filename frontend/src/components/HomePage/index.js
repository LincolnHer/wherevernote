import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getNotebooks } from "../../store/notebook";
import { getNotes } from "../../store/notes";
import Note from "../Note";
import NoteList from "../NoteList.js";
import Sidebar from "../SidebarPage";
import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooksObj = useSelector(state => state?.notebooks)
  const notesObj = useSelector(state => state?.notes)
  // console.log('notebook normalized state', notebooksObj)

  useEffect(() => {
    if (!sessionUser?.id) return
    dispatch(getNotebooks(sessionUser?.id))
    dispatch(getNotes(sessionUser?.id))
  }, [dispatch]);

  if (!sessionUser) {
    return <Redirect to="/" />
   }

  return (
    <div className="home-page-content">
      <Sidebar notebooks={notebooksObj} notes={notesObj}/>
      <NoteList notes={notesObj}/>
      <Note notebooks={notebooksObj} notes={notesObj} />
    </div>
  )
}

export default HomePage
