import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherMyCourses() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header"> Trainings</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <td>Php Development</td>
                  <td>
                    <Link to="/"> Daniel Muluneh </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm active mx-4">
                      Delete
                    </button>
                    <Link
                      to="/add-chapter/2 "
                      className="btn btn-success btn-sm active ml-1">
                      Add Chapter
                    </Link>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherMyCourses;
