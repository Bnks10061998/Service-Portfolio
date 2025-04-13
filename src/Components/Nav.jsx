import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Nav.css'; 
import { Link} from "react-router-dom";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="strike-container">
      <h1 className="strike-text">
          <a href="#" className="text-decoration-none text-white">
            <span className="red">L</span>east&nbsp;
            <span className="red">A</span>ction
          </a>
        </h1>
      </div>

      <ul className="menu-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li
          className={`dropdown ${isMobile && isDropdownOpen ? 'open' : ''}`}
          onClick={(e) => {
            if (isMobile) toggleDropdown(e);
          }}
        >
          <div className="Servicetext">
          {/* className="dropdown-toggle" */}
            Services <FaChevronDown  className="dropdown-icon"/>
          </div>
          <Link to="services">

          <ul className="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Application</a></li>
            <li><a href="#">UI/UX Designing</a></li>
            <li><a href="#">Cloud Services</a></li>
            <li><a href="#">IT Support & Maintenance</a></li>
          </ul></Link>
        </li>

        <li><Link to="/team">Team Profile</Link></li>
        <li><a href="#stack">Tech Stack</a></li>
        <li><Link to="contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
