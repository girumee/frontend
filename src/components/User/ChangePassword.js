import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function ChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
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
                <label
                  for="inputPassword"
                  className="col-sm-2 col-form-label"></label>
                <div className="col-sm-6">
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

export default ChangePassword;
