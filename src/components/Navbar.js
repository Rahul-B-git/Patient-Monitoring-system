import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            <h1>Patient Monitoring System</h1>
          </div>
          <div class="menu-items">
            <li>
              <Link to="/Critical">Critical Patients</Link>
            </li>
            <li>
              <Link to="/Midcritical">Midcritical Patients</Link>
            </li>
            <li>
              <Link to="/Periodic">Periodic Patients</Link>
            </li>
            <li>
              <Link to="#">contact</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
