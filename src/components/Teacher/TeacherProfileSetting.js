import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherProfileSetting() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Profile Setting</h5>
            <div className="card-body">
              <div className="mb-2 row">
                <label className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="mb-2 row">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="mb-2 row">
                <label htmlFor="formFile" className="col-sm-2 col-form-label">
                  Profile Picture
                </label>
                <div className="col-sm-6">
                  <input
                    type="file"
                    className="form-control"
                    id="formFile"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="mb-2 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="mb-2 row">
                <label className="col-sm-2 col-form-label">Qualification</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Qualification"
                  />
                </div>
              </div>
              <hr />
              <div className="d-grid gap-2 col-sm-2">
                <button type="update" className="btn1">
                  Update
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherProfileSetting;
