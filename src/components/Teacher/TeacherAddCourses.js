import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherAddCourses() {
  const [cats, setCats] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "",
    teacher: "",
    title: "",
    description: "",
    featured_img: "",
    techs: "",
  });

  // start Fetch category and teacher data when the page load
  useEffect(() => {
    try {
      axios.get(baseUrl + "/category").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    try {
      axios.get(baseUrl + "/teacher").then((res) => {
        setTeachers(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // end Fetch category and teacher data when the page load

  //start Change Element Value
  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };
  // End Change Element Value

  //start Change Element Value
  const handleFileChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.files[0],
    });
  };
  // End Change Element Value

  //start Submit Form
  const submitForm = () => {
    const _formData = new FormData();
    _formData.append("category", courseData.category);
    _formData.append("teacher", courseData.teacher);
    _formData.append("title", courseData.title);
    _formData.append("description", courseData.description);
    _formData.append(
      "featured_img",
      courseData.featured_img,
      courseData.featured_img.name
    );
    _formData.append("techs", courseData.techs);
    try {
      axios
        .post(baseUrl + "/course/", _formData, {
          headers: {
            "content-type": "multiple/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  //End Submit Form

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header"> Add Training</h5>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  onChange={handleChange}
                  className="form-control">
                  {cats.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Trainer</label>
                <select
                  name="teacher"
                  onChange={handleChange}
                  className="form-control">
                  {teachers.map((teacher, index) => {
                    return (
                      <option key={index} value={teacher.id}>
                        {teacher.full_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  // placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="description"
                  id="description"
                  className="form-control"
                />{" "}
              </div>
              <div className="mb-2 row">
                <label htmlFor="video" className="form-label">
                  Feature Image
                </label>
                <div className="col-sm-6">
                  <input
                    type="File"
                    onChange={handleFileChange}
                    className="form-control"
                    id="Video"
                    name="featured_img"
                  />
                </div>
              </div>

              <div className="mb-2 row">
                <label className="col-sm-2 col-form-label">Technologist</label>
                <div className="col-sm-6">
                  <input
                    onChange={handleChange}
                    name="techs"
                    id="techs"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <hr />
              <div className="d-grid gap-2 col-sm-2">
                <button onClick={submitForm} type="submit" className="btn1">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherAddCourses;
