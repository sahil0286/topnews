import React from 'react'
import iconavbar from "./media/iconavbar.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
  <>
  <div className='container'>
      <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>STOCK MARKET UPDATES</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Stock market trends</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Fundamental analysis</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Stock market crashes</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">IPOs (Initial Public Offerings)</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Market sentiment</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>CASINOS / ONLINE BETTING</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Jackpot Wins</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Gaming Regulations</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Betting Odds</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Table Games
</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Roulette Wheel</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>ABOUT</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Home</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Features</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">Pricing</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">FAQs</a></li>
            <li className="nav-item mb-2"><a to="/" className="nav-link p-0 text-light">About us</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden ">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
      <a to="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
        <img src={iconavbar } style={{width:"40px" ,height:"40px"}} alt="TopNews icon" />
      </a>
      <span className="mb-3 mb-md-0 text-light">© 2023 Sahil Fakir, Inc</span>
    </div>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" to="/">
          <FaTwitter style={{width:"24px" ,height:"24px"}}/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" to="/">
          <FaFacebook style={{width:"24px" ,height:"24px"}}/></a></li>
          <li className="ms-3"><a className="link-body-emphasis" to="/">
          <FaInstagram style={{width:"24px" ,height:"24px"}}/></a></li>
        </ul>
      </div>
    </footer>
  </div>
  </>
  )
}