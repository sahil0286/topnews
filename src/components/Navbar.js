import React from 'react'
import iconavbar from "./media/iconavbar.png"

export default function Navbar() {
  return (
    <>
      <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/general" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img className="bi me-2" height="45" role="img" aria-label="Bootstrap" src={iconavbar} alt="" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/technology" className="nav-link px-2 text-white">Technology</a></li>
          <li><a href="/sports" className="nav-link px-2 text-white">Sports</a></li>
          <li><a href="/science" className="nav-link px-2 text-white">Science</a></li>
          <li><a href="/health" className="nav-link px-2 text-white">Health</a></li>
          <li><a href="/business" className="nav-link px-2 text-white">Business</a></li>
          <li><a href="/entertainment" className="nav-link px-2 text-white">Entertainment</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}
