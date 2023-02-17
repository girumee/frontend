import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <Link
          to="/dashboard"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> Dashboard
        </Link>
        <Link
          to="/my-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> My Courses
        </Link>
        <Link
          to="/favorite-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-heart"></i> Favorite Courses
        </Link>
        <Link
          to="/recomended-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-hand-thumbs-up"></i> Recomended Courses
        </Link>
        <Link
          to="/profile-setting"
          className="list-group-item list-group-item-action">
          <i class="bi bi-gear"></i> Profile Setting
        </Link>
        <Link
          to="/change-password"
          className="list-group-item list-group-item-action">
          <i class="bi bi-lock"></i> Change Password
        </Link>
        <Link
          to="/user-login"
          className="list-group-item list-group-item-action text-danger">
          <i class="bi bi-box-arrow-left"></i> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
