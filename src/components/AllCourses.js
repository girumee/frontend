/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function AllCourses() {
  useEffect(() => {
    document.title = "All Courses | Dan";
  });

  return (
    <div className="container mt-3">
      {/* Latest Courses*/}
      <h3 className="pb-1">All Trainings</h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/1">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="/course-detail/2">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/2">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="/course-detail/3">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/3">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <Link to="/course-detail/4">
              <img src="python.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/4">Training Title</Link>
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
                <Link to="/course-detail/1">Training Title</Link>
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
                <Link to="/course-detail/2">Training Title</Link>
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
                <Link to="/course-detail/3">Training Title</Link>
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
                <Link to="/course-detail/4">Training Title</Link>
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
                <Link to="/course-detail/1">Training Title</Link>
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
                <Link to="/course-detail/2">Training Title</Link>
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
                <Link to="/course-detail/3">Training Title</Link>
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
                <Link to="/course-detail/4">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="react.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/1">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/2">
              <img src="react.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/2">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/3">
              <img src="react.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/3">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mt-4">
          <div className="card">
            <Link to="/course-detail/4">
              <img src="react.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/course-detail/4">Training Title</Link>
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

export default AllCourses;
