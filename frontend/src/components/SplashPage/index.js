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
        <div className="splash-header">
          <p className="splash-title">Organize your work whenever, wherever</p>
          <p className="splash-sub-title">Remember everything and tackle any project with your notes and tasks all in one place. </p>
          <button className="btn">
            <NavLink to='/signup' style={{textDecoration: 'none', color: 'white'} }>Sign up for free</NavLink>
          </button>
          <p className="login-cta">
            <NavLink to='/login' className='log-in'>Already have an account? Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SplashPage
