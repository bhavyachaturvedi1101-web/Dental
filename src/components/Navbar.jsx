import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" style={{textDecoration: 'none'}}>
          <span className="main-title">Dr. Jain's Clinic</span>
          <span className="sub-title">Multi-speciality Dental & Polyclinic</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#why-us">Why Us</Link></li>
          <li><Link to="/#reviews">Reviews</Link></li>
          <li><Link to="/#visit">Visit Us</Link></li>
        </ul>
        
        <div className="nav-actions">
          <a href="tel:+919876543210" className="contact-pill" style={{textDecoration: 'none'}}>
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <Link to="/book" className="btn btn-primary">Book Visit</Link>
        </div>
      </div>
    </nav>
  );
}
