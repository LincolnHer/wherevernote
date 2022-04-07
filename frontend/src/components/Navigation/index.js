// frontend/src/components/Navigation/index.js
import React, { useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
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
      <NavLink to='/home'>home</NavLink>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink exact to="/">Evernote</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button onClick={demoUser}>Demo User</button>
      </>
    );
  }

  return (
    <ul>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
