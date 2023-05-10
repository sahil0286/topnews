import React from "react";
import iconavbar from "./media/iconavbar.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="p-3 text-bg-dark sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                className="bi me-2"
                height="45"
                role="img"
                aria-label="topnews"
                src={iconavbar}
                alt=""
              />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/technology" className="nav-link px-2 text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/sports" className="nav-link px-2 text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/science" className="nav-link px-2 text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/health" className="nav-link px-2 text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/business" className="nav-link px-2 text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/entertainment" className="nav-link px-2 text-white">
                  Entertainment
                </Link>
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
