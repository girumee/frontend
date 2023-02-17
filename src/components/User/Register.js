/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row row1">
          <div className="col-lg-6">
            <img src="./dan1.gif" className="img-fluid img" alt="" />
          </div>
          <div className="col-lg-6 px-5 pt-2">
            <h1 className="font-weight-bold py-2"> Register</h1>
            <h3 className="py-2"> Dan Training Center </h3>
            <form>
              <div className="form-row">
                <div className="col-lg-9 py-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    my-4="true"
                    p-2="true"
                  />
                </div>
                <div className="col-lg-9 py-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    my-4="true"
                    p-2="true"
                  />
                </div>
                <div className="col-lg-9 py-2">
                  <input
                    type="text"
                    placeholder="User Name"
                    className="form-control"
                    my-4="true"
                    p-2="true"
                  />
                </div>
                <div className="form-row">
                  <div className="col-lg-9 py-2 ">
                    <input
                      type="password"
                      placeholder="********"
                      className="form-control"
                      my-4="true"
                      p-2="true"
                    />
                  </div>
                </div>
                <div className="col-lg-9 py-2">
                  <input
                    type="text"
                    placeholder="Interest"
                    className="form-control"
                    my-4="true"
                    p-2="true"
                  />
                  <div id="emailHelp" className="form-text">
                    Php, Python, JavaScript, etc
                  </div>
                </div>
              </div>
              {/* <div className=" mt-3 mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="examplecheck1"
                />
                <lable className="form-check-lable" for="examplecheck1">
                  Remember
                </lable>
              </div> */}
              <div className="form-row">
                <div className="col-lg-9">
                  <button type="submit" className="btn1 mt-3 mb-4">
                    Register
                  </button>
                </div>
              </div>
              <p className="py-2">
                {" "}
                Already have an account? <a href="/user-login">Login Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
