import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

function Sidebar({ notebooks }) {
  const [showNotebooks, setShowNotebooks] = useState(false)


  // Create notebooks nav input
  return (
    <div>
      <h1>Hello from sidebar</h1>
      <li className="sidebar-nav">
      <NavLink to='/home' style={{color: 'white'}}>home</NavLink>
      </li>
      <li
      className="sidebar-nav"
      onClick={() => setShowNotebooks(!showNotebooks)}
      >
        Notebooks
      </li>

    </div>
  )
}

export default Sidebar;
