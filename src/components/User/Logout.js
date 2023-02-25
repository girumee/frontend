function Logout() {
  localStorage.removeItem("LoginStatus");
  window.location.href = "/user-login";

  return <div></div>;
}

export default Logout;
