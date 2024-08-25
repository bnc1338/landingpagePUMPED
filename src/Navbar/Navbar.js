import React, { useState, useEffect } from 'react';
import logo from "../assets/PUMPED_logoBLACK.png";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY <=30) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Navbar-container'>
    <nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" width={120}/>
      </div>
      <div className="navbar-buttons">
        <button>Contact</button>
        <button>About</button>
      </div>
      <div className="navbar-extra">
        <button>Become Partner</button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
