import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <Link
          to="/user-dashboard"
          className="list-group-item list-group-item-action">
          <i className="bi bi-speedometer"></i> Dashboard
        </Link>
        <Link
          to="/my-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> Trainings
        </Link>
        <Link
          to="/favorite-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-heart"></i> Favorite Trainings
        </Link>
        <Link
          to="/recommended-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-hand-thumbs-up"></i> Recommended Trainings
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
          to="/user-logout"
          className="list-group-item list-group-item-action text-danger">
          <i class="bi bi-box-arrow-left"></i> Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
