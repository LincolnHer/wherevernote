import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"
import './SplashPage.css'

function SplashPage() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) return null

  return (
    <>
    <div className="body">
      <div className="content">
        <div className="value">
          <h1>Organize your work whenever, wherever</h1>
          <h5>Remember everything and tackle any project with your notes and tasks all in one place. </h5>
          <p className="cta">
            <NavLink to='/signup'>Sign up for free</NavLink>
          </p>
          <p className="login-cta">
            <NavLink to='/login'>Already have an account? Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SplashPage
