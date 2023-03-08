import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherMyCourses() {
  useEffect(() => {
    document.title = "Trainings | Dan";
  });

  const [courseData, setCourseData] = useState([]);
  const teacherId = localStorage.getItem("teacherId");

  //Fetch trainings when the page load
  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher-courses/" + teacherId).then((res) => {
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
                    <th>Category</th>
                    <th>Trainer</th>
                    <th>Training Title</th>
                    <th>Description</th>
                    <th>Technologies</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => (
                    <tr>
                      <td>{course.category}</td>
                      <td>{course.teacher}</td>
                      <td>{course.title}</td>
                      <td>{course.description}</td>
                      <td>{course.techs}</td>
                      <td>
                        <button className="btn btn-danger btn-sm mx-2">
                          Delete
                        </button>
                        <Link
                          to="/add-chapter/2 "
                          className="btn btn-success btn-sm">
                          Add Chapter
                        </Link>
                      </td>
                    </tr>
                  ))}
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
