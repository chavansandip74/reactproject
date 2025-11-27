import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer-text wow fadeInDown" data-wow-delay="0.3s">
              <p>Copyright © 2024 Sandip Chavan</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/chavan-sandip-uddhav" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin "></i>
                  </a>
                  <a href="https://www.instagram.com/sandip_chavan3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram ml-2"></i>
                </a>
               
                <a href="https://wa.me/7499743836" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp ml-2"></i>
                </a>
                <a href="https://github.com/chavansandip74" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github ml-2"></i>
                </a>
                <a href="http://localhost:5173/reactproject/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe ml-2"></i>
                </a>
                <a href="tel:+7499743836" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-mobile-alt ml-2"></i>
                </a>
                <a href="mailto:chavansandip7499@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-envelope ml-2"></i>
                </a>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
