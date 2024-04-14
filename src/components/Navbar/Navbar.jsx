import { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [isActive,setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>
        <ul className="list">
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon">
          <img src="../../src/assets/menuIcon.svg" alt="menu-icon" onClick={() => setIsActive(true)}/>
        </div>
      </nav>
 
      <div className={`mobile-menu-container ${isActive ? 'active' : ''}`}>
        <div className="close-icon">
          <img src="../../src/assets/closeIcon.svg" alt="close-icon" onClick={() => setIsActive(false)}/>
        </div>

        <ul className="menu-items">
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>Course Details</a>
          </li>
          <li>
            <a href="#info" onClick={() => setIsActive(false)}>About</a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>Blog</a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>Testimonials</a>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default Navbar;
