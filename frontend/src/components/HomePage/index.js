import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import './HomePage.css'

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);
  
  if (!sessionUser) {
   return <Redirect to="/" />
  }

  return (
      <h1>Hello From Home Page</h1>
  )
}

export default HomePage
