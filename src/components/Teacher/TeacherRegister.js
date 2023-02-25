/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./TeacherRegister.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/teacher/";

function TeacherRegister() {
  useEffect(() => {
    document.title = "Teacher Registration | Dan";
  });

  //useState
  const [teacherData, setteacherData] = useState({
    full_name: "",
    email: "",
    password: "",
    qualification: "",
    mobile_no: "",
    skills: "",
    status: "",
  });

  //Change Element Value
  const handleChange = (event) => {
    setteacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  // End

  // Submit Form
  const submitForm = () => {
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append("qualification", teacherData.qualification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("skills", teacherData.skills);

    try {
      axios.post(baseUrl, teacherFormData).then((response) => {
        setteacherData({
          full_name: "",
          email: "",
          password: "",
          qualification: "",
          mobile_no: "",
          skills: "",
          status: "success",
        });
      });
    } catch (error) {
      console.log(error);
      setteacherData({ status: error });
    }
  };
  //end Form

  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  if (teacherLoginStatus == "true") {
    window.location.href = "/teacher-dashboard";
  }

  return (
    <section className="Form my-4 mx-5">
      {teacherData.status == "success" && (
        <p className="text-success text-center">Thanks for your Registration</p>
      )}
      {teacherData.status == "error" && (
        <p className="text-danger text-center">Something went wrong</p>
      )}
      <div className="container">
        <div className="row row1">
          <div className="col-lg-6">
            <img src="./dan1.gif" className="img-fluid img" alt="" />
          </div>
          <div className="col-lg-6 px-5 pt-2">
            <h1 className="font-weight-bold ">Trainer Registration</h1>

            <form>
              <div className="form-row">
                <div className="form-floating mb-2 col-lg-9">
                  <input
                    value={teacherData.full_name}
                    onChange={handleChange}
                    name="full_name"
                    type="text"
                    className="form-control"
                    id="full_name"
                    placeholder="Full Name"
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                </div>

                <div className="form-floating mb-2 col-lg-9">
                  <input
                    value={teacherData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                  <label htmlFor="floatingInput">Email Address</label>
                </div>

                <div className="form-floating mb-2 col-lg-9">
                  <input
                    value={teacherData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="********"
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>

                <div className="form-floating mb-2 col-lg-9">
                  <input
                    value={teacherData.qualification}
                    onChange={handleChange}
                    name="qualification"
                    type="text"
                    placeholder="Qualification (Bsc, Msc, Mgt, etc)"
                    className="form-control"
                    id="qualification"
                  />
                  <label htmlFor="floatingInput">
                    Qualification (Bsc, Msc, Mgt, etc)
                  </label>
                </div>

                <div className="mb-2 row">
                  <label className="col-sm-3 col-form-label">
                    Mobile Number
                  </label>
                  <div className="col-sm-6">
                    {/* <PhoneInput
                      value={teacherData.mobile_no}
                      onChange={handleChange}
                      name="mobile_no"
                      className="form-control"
                      placeholder="Enter phone number"
                      id="mobile_no"
                      international
                      defaultCountry="ET"
                      limitMaxLength={9}
                    /> */}

                    <input
                      value={teacherData.mobile_no}
                      onChange={handleChange}
                      name="mobile_no"
                      type="number"
                      placeholder="Mobile Numbers"
                      className="form-control"
                      id="mobile_no"
                    />
                  </div>
                </div>
                <div className="form-floating col-lg-9">
                  <input
                    value={teacherData.skills}
                    onChange={handleChange}
                    name="skills"
                    type="text"
                    className="form-control"
                    id="skills"
                    placeholder="Skills ( Django, Python, React, JavaScript etc)"
                  />
                  <label htmlFor="floatingInput">
                    Skills ( Django, Python, React, JavaScript etc)
                  </label>
                </div>
              </div>
            </form>
            {/* <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
              />
              <label className="form-check-label">Remember</label>
            </div> */}
            <div className="form-row mb-2 row">
              <div className="col-sm-9">
                <button
                  onClick={submitForm}
                  type="submit"
                  className="btn1 mt-3 mb-4">
                  {" "}
                  Register
                </button>
              </div>
            </div>
            <p className="py-2">
              {" "}
              Already have an account?{" "}
              <Link to="/teacher-login">Login Here</Link>
            </p>
            {/* end form */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherRegister;
