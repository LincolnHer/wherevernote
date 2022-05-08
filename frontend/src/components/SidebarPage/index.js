import React, { useState } from "react";
import { NavLink, useParams } from 'react-router-dom'
import NavNotebook from "./NavNotebook";
import { useModal } from '../../context/ModalContext'
import './Sidebar.css'

function Sidebar({ notebooks, notes }) {
  const { notebookId } = useParams();
  const [showNotebooks, setShowNotebooks] = useState(false)
  const { setModalIsOpen1 } = useModal();

  // Create notebooks nav input
  return (
    <div className="sidebar">
      <ul>
        <li className="nav-links"
        >
          <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/home'>Home</NavLink>
        </li>
        <li
          onClick={ () => {setShowNotebooks(!showNotebooks); setModalIsOpen1(false) } }
          className="nav-links"
        >
          Notebooks
        </li>
        {showNotebooks &&
          <NavNotebook notebooks={notebooks} notes={notes}/>
        }
      </ul>
    </div>
  )
}

export default Sidebar;
