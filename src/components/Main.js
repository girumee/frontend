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
import TeacherLogout from "./Teacher/TeacherLogout";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherMyCourses from "./Teacher/TeacherMyCourses";
import AddChapter from "./Teacher/AddChapter";
import TeacherAddCourses from "./Teacher/TeacherAddCourses";
import TeacherMyUses from "./Teacher/TeacherMyUsers";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";

//List pages
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeachers from "./PopularTeachers";
import CategoryCourses from "./CategoryCourses";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/course-detail/:course_id" element={<CourseDetail />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />

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
        <Route path="/teacher-logout/" element={<TeacherLogout />} />
        <Route path="/teacher-register/" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard/" element={<TeacherDashboard />} />
        <Route path="/teacher-my-Courses/" element={<TeacherMyCourses />} />
        <Route path="/add-chapter/:course_id" element={<AddChapter />} />
        <Route path="/teacher-my-Users/" element={<TeacherMyUses />} />
        <Route path="/teacher-add-course/" element={<TeacherAddCourses />} />
        <Route
          path="/teacher-profile-setting/"
          element={<TeacherProfileSetting />}
        />
        <Route
          path="/teacher-change-password/"
          element={<TeacherChangePassword />}
        />

        {/* List page */}
        <Route path="/all-courses/" element={<AllCourses />} />
        <Route path="/popular-courses/" element={<PopularCourses />} />
        <Route path="/popular-teachers/" element={<PopularTeachers />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
