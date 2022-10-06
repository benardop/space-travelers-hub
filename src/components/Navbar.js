import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light">
    <div className="container-fluid ">
      <span className="navbar-brand ">
        <img src={logo} alt="logo" width="70px" height="70px" />
        {' '}
        Space Traveller Hub
      </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="selected" to="/">Rockets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeclassname="selected" to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeclassname="selected" to="/myprofile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
