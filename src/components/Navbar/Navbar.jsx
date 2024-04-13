import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Sound<span className="red">DZign</span>
      </a>
      <ul className="list">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Course Details</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>

      <div className="menu-icon">
        <img src="../../src/assets/menuIcon.svg" alt="menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
