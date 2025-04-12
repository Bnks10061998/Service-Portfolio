

import React, { useState } from 'react';
import './Nav.css';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="strike-container">
        <h1 className="strike-text">
          <span className="red">L</span>east&nbsp;
          <span className="red">A</span>ction
        </h1>
      </div>

      <ul className="menu-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        
        {/* Dropdown */}
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <a href="#">
            Services <FaChevronDown className="dropdown-icon" />
          </a>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Application</a></li>
              <li><a href="#">UI/UX Designing</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">IT Support & Maintenance</a></li>
            </ul>
          )}
        </div>

        <a href="#">Team Profile</a>
        <a href="#">Tech Stack</a>
        <a href="#">Contact Us</a>
      </ul>

    </nav>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import './Nav.css';
// import { FaChevronDown } from 'react-icons/fa';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(prev => !prev);
//   };

//   return (
//     <nav className="navbar">
//       <div className="strike-container">
//         <h1 className="strike-text">
//           <span className="red">L</span>east&nbsp;
//           <span className="red">A</span>ction
//         </h1>
//       </div>

//       <ul className="menu-links">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>

//         <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
//           <a href="#">
//             Services <FaChevronDown className="dropdown-icon" />
//           </a>
//           <ul className="dropdown-menu">
//             <li><a href="#">Web Development</a></li>
//             <li><a href="#">Mobile Application</a></li>
//             <li><a href="#">UI/UX Designing</a></li>
//             <li><a href="#">Cloud Services</a></li>
//             <li><a href="#">IT Support & Maintenance</a></li>
//           </ul>
//         </li>

//         <li><a href="#">Team Profile</a></li>
//         <li><a href="#">Tech Stack</a></li>
//         <li><a href="#">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
