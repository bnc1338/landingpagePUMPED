import React, { useState, useEffect } from 'react';
import logo from "../assets/PUMPED_logoBLACK.png";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bottomOfPage = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 1; // Adjust to detect bottom
      
      // Update if the user is at the bottom of the page
      setIsAtBottom(bottomOfPage);

      if (bottomOfPage) {
        setShow(false); // Hide navbar when at bottom
      } else if (currentScrollY <= 30) {
        setShow(true); // Show navbar near top of page
      } else if (currentScrollY > lastScrollY && !bottomOfPage) {
        setShow(false); // Hide navbar when scrolling down and not at the bottom
      } else if (currentScrollY < lastScrollY && !bottomOfPage) {
        setShow(true); // Show navbar when scrolling up and not at the bottom
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isAtBottom]);

  const handleDownloadClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='Navbar-container'>
      <nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width={120} />
        </div>
        <div className="navbar-buttons">
          <button onClick={handleDownloadClick}>Download</button>
        </div>
        <div className="navbar-extra">
          <button onClick={() => window.location.href = 'https://www.thepumpedapp.com/partnership'}>Become Partner</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
