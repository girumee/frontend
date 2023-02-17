/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="img1 bg-secondary" src="dan1.gif" /> Dan Training
          Center
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" aria-current="page" to="/">
              <i class="bi bi-house-door-fill"></i> Home
            </Link>
            <Link className="nav-link" aria-current="page" to="/courses">
              <i class="bi bi-collection-play"></i> Courses
            </Link>
            <Link className="nav-link" aria-current="page" to="/teachers">
              <i class="bi bi-person-video2"></i> Teachers
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggel"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                User <i class="bi bi-caret-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/user-login">
                    <i class="bi bi-box-arrow-in-right"></i> Log In
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/user-register">
                    <i class="bi bi-person-add"></i> Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/dashboard">
                      <i class="bi bi-speedometer"></i> Dashboard
                    </Link>
                    <Link Link className="dropdown-item" to="/user-login">
                      <i class="bi bi-box-arrow-left"></i> Logout
                    </Link>
                  </li>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
