import React, { useEffect } from 'react';
import { Star, Clock, ShieldCheck, Smile, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="location-tag">
              📍 Jankupura, Mandsaur
            </motion.div>
            <motion.h1 variants={fadeInUp}>Gentle care for a smile you're proud to show.</motion.h1>
            <motion.p variants={fadeInUp}>
              Dr. Jain's Multi-speciality Dental and Polyclinic — Mandsaur's trusted neighbourhood dentist. 
              Quality treatment, honest advice, and a doctor who remembers your name.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="hero-buttons">
              <Link to="/book" className="btn btn-primary">Book a Visit</Link>
              <a href="tel:+919876543210" className="btn btn-outline">Call Now</a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="trust-badges">
              <div className="trust-badge">
                <Star size={18} color="#ffc107" fill="#ffc107" />
                <span>4.8 on Google</span>
              </div>
              <div className="trust-badge">
                <ShieldCheck size={18} />
                <span>Painless, modern care</span>
              </div>
              <div className="trust-badge">
                <Clock size={18} />
                <span>Morning & Evening slots</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-bg-light">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="section-title" style={{textAlign: 'left'}}>Where quality dentistry feels personal.</motion.h2>
              <motion.p variants={fadeInUp}>Located in front of Dhawaj Office, Jankupura, Dr. Jain's Multi-speciality Dental and Polyclinic has earned some of the warmest reviews in the area.</motion.p>
              <motion.p variants={fadeInUp}>We keep our approach simple: listen first, explain clearly, and treat every mouth the way we'd want our own family treated. Whether you need a simple checkup or complex dental surgery, we are here for you.</motion.p>
              <br/>
              <motion.button variants={fadeInUp} className="btn btn-primary">Learn More About Us</motion.button>
            </motion.div>
            <motion.div 
              className="doctor-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img src="/dr_kapil_1785157228619.png" alt="Dr. Kapil Jain treating a patient" className="doctor-img" />
              <div className="doctor-info">
                <h3>Dr. Kapil Jain</h3>
                <span className="doctor-role">Lead Dentist & Clinic Director</span>
                <p>Dr. Jain has built the clinic's reputation on careful, unhurried treatment and a warm chairside manner. Every patient receives customized care tailored perfectly to their needs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything your smile needs.
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From routine checkups to more involved procedures, every treatment starts with an honest conversation.
          </motion.p>
          
          <div className="services-list">
            {[
              { category: "PREVENTATIVE CARE", img: "/service_checkup_1785157241158.png", title: "General Checkups", desc: "Routine exams and cleaning to catch problems early — the simplest way to avoid a bigger, more expensive procedure later.", link: "Book a checkup" },
              { category: "RESTORATIVE CARE", img: "/service_root_canal_1785157253106.png", title: "Root Canal Treatment", desc: "Comfortable, precise care to save an infected tooth and relieve persistent pain — Dr. Jain talks you through each step.", link: "Ask about root canal" },
              { category: "COSMETIC DENTISTRY", img: "/service_whitening_1785157264271.png", title: "Teeth Whitening", desc: "Safe, professional brightening for a confident and radiant smile.", link: "Book a whitening session" },
              { category: "ORTHODONTICS", img: "/service_braces_1785157274621.png", title: "Braces & Alignment", desc: "Orthodontic guidance for patients of all ages using modern techniques and clear aligners.", link: "Consult for braces" },
              { category: "COSMETIC DENTISTRY", img: "/service_cosmetic_1785157285751.png", title: "Cosmetic Dentistry", desc: "Veneers, bonding, and shaping to give you the perfect smile you've always wanted.", link: "Explore cosmetic options" },
              { category: "ORAL SURGERY", img: "/service_extraction_new_1785157607624.png", title: "Painless Extractions", desc: "Gentle removal of problematic teeth, including wisdom teeth, with maximum comfort.", link: "Ask about extractions" }
            ].map((service, index) => {
              const isEven = index % 2 !== 0;
              return (
                <motion.div 
                  key={index} 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp} 
                  className={`service-row ${isEven ? 'row-reverse' : ''}`}
                >
                  <div className="service-row-img-wrapper">
                    <img src={service.img} alt={service.title} className="service-row-img" />
                    <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="service-row-content">
                    <span className="service-category">— {service.category}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to="/book" className="service-link">{service.link} &rarr;</Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section section-bg-light">
        <motion.div 
          className="container" 
          style={{textAlign: 'center'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="section-title">Trusted by Mandsaur, one smile a time.</motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">We don't chase big numbers — we chase patients who come back, and who send their family. Our multi-speciality approach ensures you get the right treatment without the runaround.</motion.p>
          <motion.button variants={fadeInUp} className="btn btn-outline">See Our Approach</motion.button>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What our patients are saying.
          </motion.h2>
          
          <motion.div 
            className="reviews-grid" 
            style={{marginTop: '40px'}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: "Rahul S.", text: "\"Thank you Dr. Jain for the great experience. The clinic is very clean and the staff is extremely professional. Best dental care in Mandsaur.\"" },
              { name: "Priya M.", text: "\"Very nice experience... very good doctor. The root canal was completely painless. Highly recommend to everyone in the area.\"" },
              { name: "Amit P.", text: "\"Tremendous service. Thank you doctor for explaining the whole procedure patiently. I finally have my smile back!\"" }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp} className="review-card">
                <div className="stars">
                  <Star size={20} color="#ffc107" fill="#ffc107" />
                  <Star size={20} color="#ffc107" fill="#ffc107" />
                  <Star size={20} color="#ffc107" fill="#ffc107" />
                  <Star size={20} color="#ffc107" fill="#ffc107" />
                  <Star size={20} color="#ffc107" fill="#ffc107" />
                </div>
                <p className="review-text">{review.text}</p>
                <span className="reviewer-name">{review.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
