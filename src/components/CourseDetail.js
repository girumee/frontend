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
          <img src="/django.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Training Title</h3>
          <p>Web Development Training. </p>
          <p className="fw-bold">
            Course By: <Link to="/teacher-detail/1 ">Trainer 1</Link>
          </p>
          <p className="fw-bold">
            Duration: <a href="#">3 Hours 30 minutes </a>{" "}
          </p>
          <p className="fw-bold">Rating: 4.5/5</p>
        </div>
      </div>

      {/* Course Video */}
      <div className="card mt-4">
        <h3 className="card-header">Training Videos</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button
                className="btn btn-sm btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#VideoModal1">
                Play <i className="bi bi-play-circle"></i>
              </button>
            </span>
            {/* <!--Start Video Modal --> */}
            <div
              className="modal fade"
              id="VideoModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Video 1
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/watch?v=qbPxZPsjhbg"
                        title="YouTube video"
                        allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End Video Modal --> */}
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button className="btn btn-sm btn-danger">
                Play <i className="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button className="btn btn-sm btn-danger">
                Play <i className="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button className="btn btn-sm btn-danger">
                Play <i className="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button className="btn btn-sm btn-danger">
                Play <i className="bi bi-play-circle"></i>
              </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction{" "}
            <span className="float-end">
              <span className="me-3">1 Hour 30 Minuets</span>
              <button className="btn btn-sm btn-danger">
                Play <i className="bi bi-play-circle"></i>
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
                <Link to="/course-detail/1">Course Title</Link>
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
                <Link to="/course-detail/2"> Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
