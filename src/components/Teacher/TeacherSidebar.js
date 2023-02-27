import { Link } from "react-router-dom";

function TeacherSidebar() {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <Link
          to="/teacher-dashboard"
          className="list-group-item list-group-item-action">
          <i className="bi bi-speedometer"></i> Dashboard
        </Link>
        <Link
          to="/teacher-my-courses"
          className="list-group-item list-group-item-action">
          <i className="bi bi-collection-play"></i> Trainings
        </Link>
        <Link
          to="/teacher-add-course"
          className="list-group-item list-group-item-action">
          <i className="bi bi-database-add"></i> Add Training
        </Link>
        <Link
          to="/teacher-my-users"
          className="list-group-item list-group-item-action">
          <i className="bi bi-person"></i> Users
        </Link>
        <Link
          to="/teacher-profile-setting"
          className="list-group-item list-group-item-action">
          <i className="bi bi-gear"></i> Profile Setting
        </Link>
        <Link
          to="/teacher-change-password"
          className="list-group-item list-group-item-action">
          <i className="bi bi-lock"></i> Change Password
        </Link>
        <Link
          to="/teacher-logout"
          className="list-group-item list-group-item-action text-danger">
          <i className="bi bi-box-arrow-left"></i> Logout
        </Link>
      </div>
    </div>
  );
}

export default TeacherSidebar;
