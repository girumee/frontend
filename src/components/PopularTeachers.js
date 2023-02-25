/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

//axios setup
const baseUrl = "http://127.0.0.1:8000/api";

function PopularTeachers() {
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    axios.get(baseUrl + "/teacher/").then((response) => {
      setTeacher(response.data);
    });
  }, []);
  console.log(teacher);

  return (
    <div className="container mt-3">
      {/* Popular Trainers */}
      <h3 className="pb-1">Popular Trainers </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="teacher1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <img src="teacher1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="teacher1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mt-4">
          <div className="card">
            <img src="teacher1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Popular Trainers */}

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

export default PopularTeachers;
