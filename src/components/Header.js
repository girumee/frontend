/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Dan Training
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
            <Link className="nav-link active" aria-current="page" to="/">
              Home <i class="bi bi-house-door-fill"></i>
            </Link>
            <Link className="nav-link" to="/courses">
              Courses <i class="bi bi-collection-play"></i>
            </Link>
            <Link className="nav-link" to="/teachers">
              Teachers <i class="bi bi-person-video2"></i>
            </Link>
            <Link className="nav-link" to="/user-login">
              User Login <i class="bi bi-box-arrow-in-right"></i>
            </Link>
            <Link className="nav-link" to="/user-register">
              User Register <i class="bi bi-person-add"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
