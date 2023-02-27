/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    document.title = "Dan Training";
  });

  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");

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
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
            <Link className="nav-link" aria-current="page" to="/all-courses">
              <i className="bi bi-collection-play"></i> Trainings
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Trainer
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {teacherLoginStatus != "true" && (
                  <>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/teacher-login">
                        <i className="bi bi-box-arrow-in-right"></i> Log In
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-current="page"
                        to="/teacher-register">
                        <i className="bi bi-person-add"></i> Register
                      </Link>
                    </li>
                  </>
                )}

                {teacherLoginStatus == "true" && (
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/teacher-dashboard">
                      <i className="bi bi-speedometer"></i> Dashboard
                    </Link>
                    <Link Link className="dropdown-item" to="/teacher-logout">
                      <i className="bi bi-box-arrow-left"></i> Logout
                    </Link>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Trainee
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/user-login">
                    <i className="bi bi-box-arrow-in-right"></i> Log In
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/user-register">
                    <i className="bi bi-person-add"></i> Register
                  </Link>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/user-dashboard">
                    <i className="bi bi-speedometer"></i> Dashboard
                  </Link>
                  <Link Link className="dropdown-item" to="/user-logout">
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </Link>
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
