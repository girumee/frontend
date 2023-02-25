function TeacherLogout() {
  localStorage.removeItem("teacherLoginStatus", false);
  window.location.href = "/";

  return <div></div>;
}

export default TeacherLogout;
