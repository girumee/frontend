import { Link } from "react-router-dom";

function TeacherSidebar() {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <Link
          to="/teacher-dashboard"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> Dashboard
        </Link>
        <Link
          to="/teacher-my-courses"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> My Courses
        </Link>
        <Link
          to="/teacher-add-course"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> Add Course
        </Link>
        <Link
          to="/teacher-my-users"
          className="list-group-item list-group-item-action">
          <i class="bi bi-collection-play"></i> My Users
        </Link>
        <Link
          to="/teacher-profile-setting"
          className="list-group-item list-group-item-action">
          <i class="bi bi-gear"></i> Profile Setting
        </Link>
        <Link
          to="/teacher-change-password"
          className="list-group-item list-group-item-action">
          <i class="bi bi-lock"></i> Change Password
        </Link>
        <Link
          to="/teacher-login"
          className="list-group-item list-group-item-action text-danger">
          <i class="bi bi-box-arrow-left"></i> Logout
        </Link>
      </div>
    </div>
  );
}

export default TeacherSidebar;
