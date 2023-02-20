import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherChangePassword() {
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
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Old Password
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
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  New Password
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
              <hr />
              <div className="row">
                <div className="d-grid gap-2 col-sm-2">
                  <button type="submit" className="btn1 ">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherChangePassword;
