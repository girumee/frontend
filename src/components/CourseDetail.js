/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          {" "}
          <img src="/logo512.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Course Title</h3>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way.{" "}
          </p>
          <p className="fw-bold">
            Course By: <a href="#">Teacher 1</a>
          </p>
          <p className="fw-bold">
            Duration: <a href="#">3 Hours 30 minutes </a>{" "}
          </p>
          <p className="fw-bold">Rating: 4.5/5</p>
        </div>
      </div>

      {/* Course Video */}
      <div className="card mt-4">
        <h3 className="card-header">Course Videos</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minits</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuts</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuts</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuts</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuts</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuts</span>
              <button className="btn btn-sm btn-danger">
                Play <i class="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>

      <h3 className="pb-1 mb-4 py-5">Related Courses </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/2">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/2">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
