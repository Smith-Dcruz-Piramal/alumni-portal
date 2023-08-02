import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";

export const Home = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Better Conectivity with Alumni</h1>
              <h2>
                Our mission is to foster lifelong connections and engagement
                among alumni by providing a dynamic and inclusive online
                platform.
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="/assets/hero-img.svg"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Forum */}
      <section>
        <div id="alumspeak" className="d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h3 className="text-muted">
                <span>AlumSpeak</span>
              </h3>
              <p>Our portal to help Alumni to connect with each other</p>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="getstarted scrollto" href="#about" style={{}}>
                    Join
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </div>
      </section>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Check what our Alumni had to say</p>
          </div>

          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/testimonials/1.jpg"
                    alt="..."
                    className="img-thumbnail"
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                      marginBottom: "30px"
                    }}
                  />
                </div>

                <h4 className="title">Benjamin Anderson</h4>
                <p className="description">
                  "The alumni portal of our company has been a remarkable
                  platform for staying connected with former colleagues. It
                  allows us to share industry insights, collaborate on projects,
                  and even explore new business opportunities together. It's a
                  testament to the strong bond we have as alumni."
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/testimonials/2.jpg"
                    alt="..."
                    className="img-thumbnail"
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                      marginBottom: "30px"
                    }}
                  />
                </div>
                <h4 className="title">Ethan Mitchell</h4>
                <p className="description">
                  "I can't thank the company enough for establishing the alumni
                  portal. It has been an incredible resource for professional
                  growth and networking. Through the portal, I've connected with
                  alumni who have helped me navigate my career path and provided
                  valuable mentorship."
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/testimonials/3.jpg"
                    alt="..."
                    className="img-thumbnail"
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                      marginBottom: "30px"
                    }}
                  />
                </div>
                <h4 className="title">Samuel Roberts</h4>
                <p className="description">
                  Being a part of the company's alumni portal has made
                  transitioning into new roles and industries seamless. The
                  portal's job board features exclusive opportunities, and the
                  network of alumni is always ready to offer advice and support.
                  It's like having an extended family to rely on.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/testimonials/4.jpg"
                    alt="..."
                    className="img-thumbnail"
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                      marginBottom: "30px"
                    }}
                  />
                </div>
                <h4 className="title">Noah Thompson</h4>
                <p className="description">
                  "The alumni portal has been instrumental in fostering a sense
                  of community and camaraderie among former employees. It keeps
                  us updated on company news, events, and achievements. I
                  appreciate the ongoing connection and the chance to maintain
                  relationships even after moving on from the company."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
