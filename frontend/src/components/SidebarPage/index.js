import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavNotebook from "./NavNotebook";
import { useModal } from "../../context/ModalContext";
import "./Sidebar.css";

function Sidebar({ notebooks, notes }) {
  const [showNotebooks, setShowNotebooks] = useState(false);
  const { setModalIsOpen1 } = useModal();

  // Create notebooks nav input
  return (
    <div className="sidebar">
      <ul className="notebooks">
        <li className="nav-links">
          <div className="i-link">
            <div className="link-icon">
              <i className="fa-solid fa-house" />
            </div>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                width: "203px"
              }}
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="nav-note-active"
              to="/home"
            >
              Home
            </NavLink>
          </div>
        </li>
        <li
          onClick={() => {
            setShowNotebooks(!showNotebooks);
            setModalIsOpen1(false);
          }}
          className="nav-links"
        >
          <div className="i-link">
            <div className="link-icon">
              <i className="fa-solid fa-book" />
            </div>
              <p className="link-text">Notebooks</p>
          </div>
        </li>
        {showNotebooks && <NavNotebook notebooks={notebooks} notes={notes} />}
      </ul>
    </div>
  );
}

export default Sidebar;
