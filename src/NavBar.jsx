import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/mystyle.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">
                <span>Alumni Portal</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link
                  to="/"
                  className={`nav-link scrollto ${
                    activeTab === "Home" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`nav-link scrollto ${
                    activeTab === "Events" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("Events")}
                >
                  Events
                </Link>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeTab === "Gallery" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={() => handleTabClick("Gallery")}
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  className={`nav-link scrollto ${
                    activeTab === "About" ? "active" : ""
                  }`}
                  href="#team"
                  onClick={() => handleTabClick("About")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className={`nav-link scrollto ${
                    activeTab === "Contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => handleTabClick("Contact")}
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="getstarted"
                  onClick={() => handleTabClick("")}
                >
                  Signup/Login
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};
