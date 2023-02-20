/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./TeacherLogin.css";

function TeacherLogin() {
  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row row1">
          <div className="col-lg-6">
            <img src="./dan1.gif" className="img-fluid img" alt="" />
          </div>
          <div className="col-lg-6 px-5 pt-5">
            <h1 className="font-weight-bold py-2"> Teacher Login</h1>
            <h3 className="py-2"> Dan Training Center </h3>
            <form>
              <div className="form-row">
                <div class="form-floating mb-2 col-lg-9">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Email Address"
                  />
                  <label for="floatingInput">name@example.com</label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-floating mb-2 col-lg-9">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="********"
                  />
                  <label for="floatingInput">Password</label>
                </div>
              </div>
              <div className=" mt-3 mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="examplecheck1"
                />
                <label className="form-check-label" for="examplecheck1">
                  Remember
                </label>
              </div>
              <div className="form-row">
                <div className="col-lg-9">
                  <button type="submit" className="btn1 mt-3 mb-4">
                    Log in
                  </button>
                </div>
              </div>
              <a href="#">Forget password</a>
              <p className="py-2">
                {" "}
                Don't have an account?{" "}
                <a href="/teacher-register">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherLogin;
