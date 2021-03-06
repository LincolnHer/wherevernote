// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push("/");
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} className="btn">
        <i className="fas fa-user-circle" />
        {user.username}
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <button onClick={logout} className="btn">
              Sign out {user.username}
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
