import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="visit" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="nav-brand" style={{marginBottom: '20px'}}>
              <span className="main-title" style={{color: '#fff'}}>Dr. Jain's Clinic</span>
              <span className="sub-title" style={{color: 'rgba(255,255,255,0.8)'}}>Multi-speciality Dental & Polyclinic</span>
            </div>
            <p>A neighbourhood dental practice in Jankupura, Mandsaur, led by expert dentists focusing on painless and modern care.</p>
          </div>
          
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#reviews">Reviews</Link></li>
              <li><Link to="/#visit">Visit Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                <MapPin size={18} style={{flexShrink: 0, margin: '4px 0 0 0'}} />
                <span>Front Of Dhawaj Office, Jankupura, Mandsaur, Madhya Pradesh</span>
              </li>
              <li style={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px'}}>
                <Phone size={18} />
                <span>Call to book</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Hours</h4>
            <ul className="footer-links">
              <li><strong>Morning:</strong><br/>10:00 AM - 2:00 PM</li>
              <li style={{marginTop: '10px'}}><strong>Evening:</strong><br/>5:00 PM - 8:30 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Jain's Multi-speciality Dental and Polyclinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
