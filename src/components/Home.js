/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

// import AllCourses from "./AllCourses";

function Home() {
  useEffect(() => {
    document.title = "Home | Dan";
  });

  return (
    <div className="container mt-3">
      {/* Latest Courses*/}
      <div className="card">
        <div className="card-header pb-2">
          <h7 className="pb-2 mb-4">
            Are you looking to take your skills to the next level? Our company's
            training program is here to help you do just that. With experienced
            instructors and a comprehensive curriculum, we'll equip you with the
            knowledge and tools you need to excel in your field. Our training
            program covers everything from technical skills to soft skills,
            ensuring that you're not just proficient in your area of expertise,
            but also able to communicate effectively, work collaboratively, and
            lead teams. Plus, our training is tailored to meet your specific
            needs and goals, so you can focus on the areas that matter most to
            you. Whether you're a seasoned professional or just starting out in
            your career, our training program can help you achieve your full
            potential. So why wait? Sign up today and see the difference our
            training can make!
          </h7>
        </div>
      </div>

      <h3 className="pb-2 mb-4">
        Latest Trainings{" "}
        <Link to="/all-courses" className="float-end">
          See All
        </Link>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to="/course-detail/1">
              <img src="django.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Training Title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
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
        <div className="col-md-3">
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
      </div>
      {/*End Latest Courses */}

      {/* Popular Trainings */}
      <h3 className="pb-1 my-4">
        Popular Trainings{" "}
        <a href="#" className="float-end">
          See All
        </a>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img src="django.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-courses">Popular Training</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
              <span className="float-end">Views: 4322</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="react.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-courses">Popular Training</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
              <span className="float-end">Views: 4322</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="django.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-courses">Popular Training</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
              <span className="float-end">Views: 4322</span>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3">
          <div className="card">
            <img src="react.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-courses">Popular Training</Link>
              </h5>
            </div>
            <div className="card-footer">
              <span>Rating: 4.5/5</span>
              <span className="float-end">Views: 4322</span>
            </div>
          </div>
        </div>
      </div>
      {/*End Popular Trainings */}

      {/* Popular Teachers */}
      <h3 className="pb-1 my-4">
        Popular Trainer{" "}
        <Link to="/popular-teachers" className="float-end">
          See All
        </Link>{" "}
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-teachers">Trainer Name</Link>
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
                <Link to="/popular-teachers">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="teacher2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/popular-teachers">Trainer Name</Link>
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
                <Link to="/popular-teachers">Trainer Name</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*End Popular Teachers */}

      {/* Student Testimonials */}
      <h3 className="pb-1 my-4">Trainee Testimonials</h3>
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
                  <p>
                    "I recently completed a training program and I can
                    confidently say it was one of the best experiences of my
                    life. <br /> The instructors were knowledgeable and
                    passionate about the subject matter, and their enthusiasm
                    was contagious. <br />
                    The training materials were well-organized and easy to
                    follow, and there were plenty of opportunities for hands-on
                    practice. <br /> I appreciated the personalized attention I
                    received from my trainers, <br /> as well as the
                    constructive feedback they gave me throughout the training.
                    <br />
                    Overall, the training program helped me to develop new
                    skills and knowledge that will undoubtedly be valuable in my
                    future endeavors. <br />I highly recommend this training to
                    anyone looking to further their education and advance their
                    career."
                  </p>
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
                  <p>
                    "I recently completed a training program and I can
                    confidently say it was one of the best experiences of my
                    life. <br /> The instructors were knowledgeable and
                    passionate about the subject matter, and their enthusiasm
                    was contagious. <br />
                    The training materials were well-organized and easy to
                    follow, and there were plenty of opportunities for hands-on
                    practice. <br /> I appreciated the personalized attention I
                    received from my trainers, <br /> as well as the
                    constructive feedback they gave me throughout the training.
                    <br />
                    Overall, the training program helped me to develop new
                    skills and knowledge that will undoubtedly be valuable in my
                    future endeavors. <br />I highly recommend this training to
                    anyone looking to further their education and advance their
                    career."
                  </p>
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
                  <p>
                    "I recently completed a training program and I can
                    confidently say it was one of the best experiences of my
                    life. <br /> The instructors were knowledgeable and
                    passionate about the subject matter, and their enthusiasm
                    was contagious. <br />
                    The training materials were well-organized and easy to
                    follow, and there were plenty of opportunities for hands-on
                    practice. <br /> I appreciated the personalized attention I
                    received from my trainers, <br /> as well as the
                    constructive feedback they gave me throughout the training.
                    <br />
                    Overall, the training program helped me to develop new
                    skills and knowledge that will undoubtedly be valuable in my
                    future endeavors. <br />I highly recommend this training to
                    anyone looking to further their education and advance their
                    career."
                  </p>
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
      {/*End Student Testimonials */}
    </div>
  );
}

export default Home;
