import React from 'react'
import iconavbar from "./media/iconavbar.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
  <>
  <div className='container'>
      <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>STOCK MARKET UPDATES</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Stock market trends</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Fundamental analysis</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Stock market crashes</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">IPOs (Initial Public Offerings)</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Market sentiment</Link></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>CASINOS / ONLINE BETTING</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Jackpot Wins</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Gaming Regulations</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Betting Odds</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Table Games
</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Roulette Wheel</Link></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>ABOUT</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Features</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">Pricing</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light">About us</Link></li>
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

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
        <img src={iconavbar } style={{width:"40px" ,height:"40px"}} alt="TopNews icon" />
      </Link>
      <span className="mb-3 mb-md-0 text-light">© 2023 Sahil Fakir, Inc</span>
    </div>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><Link className="link-body-emphasis" to="/">
          <FaTwitter style={{width:"24px" ,height:"24px"}}/></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" to="/">
          <FaFacebook style={{width:"24px" ,height:"24px"}}/></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" to="/">
          <FaInstagram style={{width:"24px" ,height:"24px"}}/></Link></li>
        </ul>
      </div>
    </footer>
  </div>
  </>
  )
}