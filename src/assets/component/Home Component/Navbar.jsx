import React, { useState, useEffect } from 'react';
import "./navbar.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id='navbar'>
      <div className={`fixed-top ${scrolling ? 'hide-info-bar' : ''}`}>
        <div className={`info-bar py-2 ${scrolling ? 'd-none' : ''}`} style={{ backgroundColor: "#e3f0e586" }}>
          <div className="container d-flex justify-content-between align-items-center">
            <div className="contact-info">
              <p className="mb-0 fs-6">
                <i className="fa-solid fa-location-dot"></i> Borle, Jamkhed, Ahmednagar, 413201  
                <i className="fa fa-phone fa ml-3"></i> +91   7499743836  
                <i className="fa-solid fa-envelope ml-3"></i> chavansandip7499@gmail.com
              </p>
            </div>
            <div className="navsocial-icons">
              <a href="https://www.linkedin.com/in/chavan-sandip-uddhav" className="mr-3" target="_blank" rel="noopener noreferrer">
                <button className="LinkedinBtn">
                  <i className="fa fa-linkedin fa"></i>
                  <span className="BG"></span>
                </button>
              </a>
              <a href="https://www.instagram.com/sandip_chavan3" className="mr-3" target="_blank" rel="noopener noreferrer">
                <button className="LinkedinBtn">
                  <i className="fa fa-instagram fa"></i>
                  <span className="BG"></span>
                </button>
              </a>
              <a href="https://wa.me/7499743836" target="_blank" className="mr-3" rel="noopener noreferrer">
                <button className="LinkedinBtn">
                  <i className="fa fa-whatsapp fa"></i>
                  <span className="BG"></span>
                </button>
              </a>
              <a href="https://github.com/chavansandip74" target="_blank" rel="noopener noreferrer">
                <button className="LinkedinBtn">
                  <i className="fa fa-github fa"></i>
                  <span className="BG"></span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar navbarstyle navbar-toggleable-sm navbar-light site-navigation" style={{ backgroundColor: "lavender", margin: 0 }}>
          <div className="container">
            <a className="namecolor" href="index.html">
              <img className='nav-item navimg' src="./img/namelogo.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#blog">Project</a></li>
                <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
