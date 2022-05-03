import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getNotebooks } from "../../store/notebook";
import Sidebar from "../SidebarPage";
import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const notebooksObj = useSelector(state => state.notebooks)
  console.log('notebook normalized state', notebooksObj)

  const notebooks = Object.values(notebooksObj)
  console.log('notebook arr', notebooks)

  useEffect(() => {
    dispatch(getNotebooks(sessionUser.id))
  }, [dispatch]);

  if (!sessionUser) {
   return <Redirect to="/" />
  }

  return (
    <>
      <h1>Hello From Home Page</h1>
      <div className="home-page-content">
        <div className="sidebar">
        <Sidebar />
        </div>
      </div>
    </>
  )
}

export default HomePage
