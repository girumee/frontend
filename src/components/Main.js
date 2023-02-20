import Header from "./Header";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import TeacherDetail from "./TeacherDetail";

//users
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavoriteCourses from "./User/FavoriteCourses";
import RecommendedCourses from "./User/RecommendedCourse";
import ProfileSetting from "./User/ProfileSetting";
import ChangePassword from "./User/ChangePassword";
import Footer from "./Footer";

//Teachers
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherMyCourses from "./Teacher/TeacherMyCourses";
import TeacherAddCourses from "./Teacher/TeacherAddCourses";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/teacher_detail/:teacher_id" element={<TeacherDetail />} />

        {/* Users */}
        <Route path="/user-login/" element={<Login />} />
        <Route path="/user-register/" element={<Register />} />
        <Route path="/user-dashboard/" element={<Dashboard />} />
        <Route path="/my-courses/" element={<MyCourses />} />
        <Route path="/favorite-courses/" element={<FavoriteCourses />} />
        <Route path="/recommended-courses/" element={<RecommendedCourses />} />
        <Route path="/profile-setting/" element={<ProfileSetting />} />
        <Route path="/change-password/" element={<ChangePassword />} />

        {/* Teachers */}
        <Route path="/teacher-login/" element={<TeacherLogin />} />
        <Route path="/teacher-register/" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard/" element={<TeacherDashboard />} />
        <Route path="/teacher-my-courses/" element={<TeacherMyCourses />} />
        <Route path="/teacher-add-course/" element={<TeacherAddCourses />} />
        <Route
          path="/teacher-profile-setting/"
          element={<TeacherProfileSetting />}
        />
        <Route
          path="/teacher-change-password/"
          element={<TeacherChangePassword />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
