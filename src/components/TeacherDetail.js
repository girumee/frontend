import { Link } from "react-router-dom";

function TeacherDetail() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          {" "}
          <img src="/teacher2.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Lula Joy </h3>
          <p>I'm a Trainer. </p>
          <p className="fw-bold">
            Skills: <Link to="/category/django">Django</Link>,{" "}
            <Link to="/category/django">JavaScript</Link>,{" "}
            <Link to="/category/django">Python</Link>
          </p>
          <p className="fw-bold">
            Recent Course: <Link to="/teacher-detail/1 ">ReactJs Course</Link>
          </p>
          <p className="fw-bold">Rating: 4.5/5</p>
        </div>
      </div>

      {/* Course Video */}
      <div className="card mt-4">
        <h5 className="card-header">Training List</h5>
        <div className="list-group list-group-flush">
          <Link to="/course-detail/1" className="list-group-item">
            Django Course 1
          </Link>
          <Link to="/course-detail/1" className="list-group-item">
            Django Course 2
          </Link>
          <Link to="/course-detail/1" className="list-group-item">
            Django Course 3
          </Link>
          <Link to="/course-detail/2" className="list-group-item">
            PHP Course 1
          </Link>
          <Link to="/course-detail/2" className="list-group-item">
            PHP Course 2
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
