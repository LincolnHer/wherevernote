// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from "../../store/session";
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  const demoUser = async () => {
    dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' })).then(() => history.push('/home'))
  }

  let sessionLinks;
  if (sessionUser) {
    // <Redirect to="/home" />

    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink
          exact to="/"
          style={{ color: 'white', textDecoration: 'none' }}
          activeStyle={{ fontWeight: "bold" }}
          activeClassName="nav-link"
        >
          Wherevernote
        </NavLink>
        <NavLink to="/login"
          style={{ color: 'white',
          textDecoration: 'none' }}
          activeStyle={{ fontWeight: "bold" }}
          activeClassName="nav-link"
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          style={{ color: 'white',
          textDecoration: 'none' }}
          activeStyle={{ fontWeight: "bold" }}
          activeClassName="nav-link"
        >
          Sign Up
        </NavLink>
        <button onClick={demoUser} className="btn">Demo User</button>
      </>
    );
  }

  return (
    <div>
      <div className='nav-bar'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
