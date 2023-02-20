import { Link } from "react-router-dom";

function TeacherDetail() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          {" "}
          <img src="/logo512.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>John Deo </h3>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way.{" "}
          </p>
          <p className="fw-bold">
            Skills: <Link to="/teacher_detail/1 ">Python</Link>,{" "}
            <Link to="/teacher_detail/1 ">JavaScript</Link>,{" "}
            <Link to="/teacher_detail/1 ">PHP</Link>
          </p>
          <p className="fw-bold">
            Recent Course: <Link to="/teacher_detail/1 ">ReactJs Course</Link>
          </p>
          <p className="fw-bold">Rating: 4.5/5</p>
        </div>
      </div>

      {/* Course Video */}
      <div className="card mt-4">
        <h5 className="card-header">Course List</h5>
        <div className="list-group list-group-flush">
          <Link to="/detail/1" className="list-group-item">
            Python Course 1
          </Link>
          <Link to="/detail/1" className="list-group-item">
            Python Course 2
          </Link>
          <Link to="/detail/1" className="list-group-item">
            Python Course 3
          </Link>
          <Link to="/detail/1" className="list-group-item">
            PHP Course 1
          </Link>
          <Link to="/detail/1" className="list-group-item">
            PHP Course 2
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
