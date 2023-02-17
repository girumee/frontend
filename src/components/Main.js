import Header from "./Header";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import Favoritecourses from "./User/FavoriteCourses";
import Recomendedcourses from "./User/RecomendedCourse";
import ProfileSetting from "./User/ProfileSetting";
import ChangePassword from "./User/ChangePassword";
import Footer from "./Footer";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/user-login/" element={<Login />} />
        <Route path="/user-register/" element={<Register />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/my-courses/" element={<Mycourses />} />
        <Route path="/favorite-courses/" element={<Favoritecourses />} />
        <Route path="/recomended-courses/" element={<Recomendedcourses />} />
        <Route path="/profile-setting/" element={<ProfileSetting />} />
        <Route path="/change-password/" element={<ChangePassword />} />
        {/* <Route path="/user-Logout/" element={<Logout />} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
