import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getNotebooks } from "../../store/notebook";
import Note from "../Note";
import NoteList from "../NoteList.js";
import Sidebar from "../SidebarPage";
import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooksObj = useSelector(state => state.notebooks)
  // console.log('notebook normalized state', notebooksObj)

  useEffect(() => {
    dispatch(getNotebooks(sessionUser.id))
  }, [dispatch]);

  if (!sessionUser) {
    return <Redirect to="/" />
   }

  return (
    <div className="home-page-content">
      <Sidebar notebooks={notebooksObj}/>
      <NoteList />
      <Note />
    </div>
  )
}

export default HomePage
