/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-3">
      {/* Lateast Courses*/}
      <h3 className="pb-1 mb-4">
        Lateast Courses{" "}
        <a href="#" className="float-end">
          See All
        </a>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo512.png" className="card-img-top" alt="..." />
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
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/2">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/3">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/3">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/4">
              <img src="logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/4">Course Title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Lateast Courses */}

      {/* Popular Courses */}
      <h3 className="pb-1 my-4">
        Popular Courses{" "}
        <a href="#" className="float-end">
          See All
        </a>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Popular Course</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Popular Course</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Popular Course</a>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Popular Course</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Popular Courses */}

      {/* Popular Teachers */}
      <h3 className="pb-1 my-4">
        Popular Teachers{" "}
        <a href="#" className="float-end">
          See All
        </a>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <img src="logo512.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Features Teachers */}

      {/* Student Teatimonials */}
      <h3 className="pb-1 my-4">Student Teatimonials</h3>
      <div className="row mb-4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide bg-dark text-white py-5 ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              {/* <img src="..." className="d-block w-100" alt="..." /> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*End Student Teatimonials */}
    </div>
  );
}

export default Home;
