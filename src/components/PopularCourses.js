/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function PopularCourses() {
  return (
    <div className="container mt-3">
      {/* Popular Courses*/}
      <h3 className="pb-1 mb-4">Popular Courses </h3>
      <div className="row mb-4">
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/1">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/2">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/2">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/3">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/3">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/4">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/4">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="django.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/1">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/2">
              <img src="django.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/2">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/3">
              <img src="django.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/3">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/4">
              <img src="django.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/4">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="javascript.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/1">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/2">
              <img src="javascript.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/2">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/3">
              <img src="javascript.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/3">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/4">
              <img src="javascript.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/4">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Latest Courses */}

      {/* start Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/*End Pagination */}
    </div>
  );
}

export default PopularCourses;
