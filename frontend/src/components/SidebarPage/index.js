import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import NavNotebook from "./NavNotebook";

function Sidebar({ notebooks }) {
  const [showNotebooks, setShowNotebooks] = useState(false)

  // Create notebooks nav input
  return (
    <div className="sidebar">
      <h1>Hello from sidebar</h1>
      <ul>
        <li className="nav-links">
          <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/home'>home</NavLink>
        </li>
        <li
        onClick={() => setShowNotebooks(!showNotebooks)}
        className="nav-links"
        >
          Notebooks
        </li>
        {showNotebooks &&
          <NavNotebook notebooks={notebooks}/>
        }
      </ul>
    </div>
  )
}

export default Sidebar;
