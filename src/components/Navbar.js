import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './stylesheets/Navbar.css';

const navLinkStyles = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: isActive ? 'underline' : 'none',
});

const Header = () => (
  <header>
    <div className="logo">
      <img className="space-logo" src={logo} alt="logo" />
      <span className="title-logo">Space Travelers&apos;  Hub</span>
    </div>
    <nav>
      <ul>
        <NavLink to="/" style={navLinkStyles}><span className="rockets">Rockets</span></NavLink>
        <NavLink to="missions" style={navLinkStyles}><span className="missions">Missions</span></NavLink>
        <NavLink to="myprofile" style={navLinkStyles}><span className="myprofile">My Profile</span></NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
