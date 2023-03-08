/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./TeacherRegister.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherLogin() {
  useEffect(() => {
    document.title = "Teacher Login | Dan";
  });

  //useState
  const [teacherLoginData, setteacherLoginData] = useState({
    email: "",
    password: "",
  });

  //start Change Element Value
  const handleChange = (event) => {
    setteacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value,
    });
  };
  // End Change Element Value

  //start Submit Form
  const submitForm = () => {
    const teacherFormData = new FormData();
    teacherFormData.append("email", teacherLoginData.email);
    teacherFormData.append("password", teacherLoginData.password);
    try {
      axios.post(baseUrl + "/teacher-login", teacherFormData).then((res) => {
        if (res.data.bool == true)
          localStorage.setItem("teacherLoginStatus", true);
        localStorage.setItem("teacherId", res.data.teacher_id);
        window.location.href = "/teacher-dashboard";
      });
    } catch (error) {
      console.log(error);
    }
  };
  //End Submit Form

  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  if (teacherLoginStatus == "true") {
    window.location.href = "/teacher-dashboard";
  }

  return (
    <section className="Form my-4 mx-5">
      {/* {teacherData.status == "success" && (
        <p className="text-success text-center">Thanks for your Registration</p>
      )} */}
      {/* {teacherData.status == "error" && (
        <p className="text-danger text-center">Something went wrong</p>
      )} */}
      <div className="container">
        <div className="row row1">
          <div className="col-lg-6">
            <img src="./dan1.gif" className="img-fluid img" alt="" />
          </div>
          <div className="col-lg-6 px-5 pt-5">
            <h1 className="font-weight-bold ">Trainer Log in</h1>

            <form>
              <div className="form-row">
                <div className="form-floating mb-2 col-lg-9">
                  <input
                    value={teacherLoginData.email}
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
                    value={teacherLoginData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="********"
                  />
                  <label htmlFor="floatingInput">Password</label>
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
                  Login
                </button>
              </div>
            </div>
            <Link to="#">Forget password</Link>
            <p className="py-2">
              {" "}
              Don't have an account?{" "}
              <Link to="/teacher-register">Register Here</Link>
            </p>
            {/* end form */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherLogin;

// //eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom";
// import "./TeacherLogin.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const baseUrl = "http://127.0.0.1:8000/api/teacher/";

// function TeacherLogin() {
//   useEffect(() => {
//     document.title = "Teacher Login | Dan";
//   });

//   //useState
//   const [teacherLoginData, setteacherLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   //Change Element Value
//   const handleChange = (event) => {
//     setteacherLoginData({
//       ...teacherLoginData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // End

//   // Submit Form
//   const submitForm = () => {
//     const teacherFormData = new FormData();
//     teacherFormData.append("email", teacherLoginData.email);
//     teacherFormData.append("email", teacherLoginData.password);
//     try {
//       axios.post(baseUrl + "/teacher-login", teacherFormData).then((res) => {
//         console.log(res.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="Form my-4 mx-5">
//       <div className="container">
//         <div className="row row1">
//           <div className="col-lg-6">
//             <img src="./dan1.gif" className="img-fluid img" alt="" />
//           </div>
//           <div className="col-lg-6 px-5 pt-5">
//             <h1 className="font-weight-bold py-2"> Teacher Login</h1>

//             <form>
//               <div className="form-row">
//                 <div className="form-floating mb-2 col-lg-9">
//                   <input
//                     value={teacherLoginData.email}
//                     onChange={handleChange}
//                     name="email"
//                     type="email"
//                     className="form-control"
//                     id="floatingInputemail"
//                     placeholder="Email Address"
//                   />
//                   <label htmlFor="floatingInputemail">Email Address</label>
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-floating mb-2 col-lg-9">
//                   <input
//                     value={teacherLoginData.password}
//                     onChange={handleChange}
//                     name="password"
//                     type="password"
//                     className="form-control"
//                     id="floatingInputpassword"
//                     placeholder="********"
//                   />
//                   <label htmlFor="floatingInput">Password</label>
//                 </div>
//               </div>
//               {/* <div className=" mt-3 mb-2">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="checkbox"
//                 />
//                 <label className="form-check-label" htmlFor="checkbox">
//                   Remember
//                 </label>
//               </div> */}

//               <div className="form-row mb-2 row">
//                 <div className="col-sm-9">
//                   <button
//                     onClick={submitForm}
//                     type="submit"
//                     className="btn1 mt-3 mb-4">
//                     {" "}
//                     Log in
//                   </button>
//                 </div>
//               </div>

//               {/* <div className="form-row">
//                 <div className="col-lg-9">
//                   <button
//                     onClick={submitForm}
//                     type="submit"
//                     className="btn1 mt-3 mb-4">
//                     Log in
//                   </button>
//                 </div>
//               </div> */}
//               <Link to="#">Forget password</Link>
//               <p className="py-2">
//                 {" "}
//                 Don't have an account?{" "}
//                 <Link to="/teacher-register">Register Here</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TeacherLogin;
