import React from 'react';
import github from '../assets/github.svg';
import './stylesheets/Footer.css';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️ 2022
      <a href="https://github.com/benardop">benardop</a>
      <a href="https://github.com/mirwaisfarahi">mirwaisfarahi</a>
      <img className="footerImg" src={github} alt="github-logo" />
    </section>
  );
}

export default Footer;
