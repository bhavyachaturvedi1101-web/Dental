import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BookVisit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ maxWidth: '600px', width: '100%' }}>
        <motion.div 
          className="book-form-card"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {submitted ? (
            <div className="success-message" style={{textAlign: 'center', padding: '40px'}}>
              <h2 style={{color: 'var(--primary-blue)', marginBottom: '20px'}}>Request Sent!</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--text-light)'}}>
                Thank you for reaching out. Dr. Jain's clinic will contact you shortly to confirm your appointment time.
              </p>
            </div>
          ) : (
            <>
              <h2 className="section-title">Book your visit</h2>
              <p className="section-subtitle" style={{marginBottom: '30px'}}>
                Fill out the form below and we'll get back to you to confirm your appointment.
              </p>
              
              <form onSubmit={handleSubmit} className="visit-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Enter your name" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" required placeholder="Enter your phone number" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" required className="form-control" />
                </div>
                
                <div className="form-group">
                  <label>Service Needed (Optional)</label>
                  <select className="form-control">
                    <option>General Checkup</option>
                    <option>Root Canal</option>
                    <option>Teeth Whitening</option>
                    <option>Braces / Orthodontics</option>
                    <option>Tooth Extraction</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '20px'}}>
                  Request Appointment
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
