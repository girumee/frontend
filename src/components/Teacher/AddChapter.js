import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddChapter() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header"> Add Chapter</h5>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  //   placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="Description"
                  id="Description"
                  className="form-label">
                  Description
                </label>
                <textarea className="form-control" rows="2"></textarea>
              </div>
              <div className="mb-2 row">
                <label htmlFor="video" className="form-label">
                  Video
                </label>
                <div className="col-sm-6">
                  <input type="File" className="form-control" id="formVideo" />
                </div>
              </div>

              <div className="mb-2 row">
                <label className="col-sm-2 col-form-label">Remarks</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Remarks about each Chapters."
                  />
                </div>
              </div>
              <hr />
              <div className="d-grid gap-2 col-sm-2">
                <button type="submit" className="btn1">
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

export default AddChapter;
