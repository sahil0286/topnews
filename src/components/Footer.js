import React from 'react'
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
  <>
  <div className='container'>
      <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Sahil Fakir, Inc</span>
    </div>
        {/* <p>© 2023 Company, Inc. All rights reserved.</p> */}
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="/">
          <FaFacebook style={{width:"24px" ,height:"24px"}}/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="/">
          <FaFacebook style={{width:"24px" ,height:"24px"}}/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="/">
          <FaFacebook style={{width:"24px" ,height:"24px"}}/></a></li>
        </ul>
      </div>
    </footer>
  </div>
  </>
  )
}