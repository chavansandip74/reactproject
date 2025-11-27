import React, { useEffect, useState } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleViewCertificate = () => {
    setShowModal(true); // Show the modal on button click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when close button is clicked
  };

  return (
    <>
      {/* Conditionally render the modal for the certificate */}
      {showModal && (
        <div className="modal-overlay m-auto" data-aos="flip-up">
          <div className="modal-content">
            <span className="close-modal-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src="./img/certificate/internship.jpg" // Path to the certificate image
              alt="Certificate"
              className="certificate-img img-fluid"
            />
          </div>
        </div>
      )}

      <div id='experience' className="about-section py-5">
        <div className="container">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">My<span> Experience</span></h2>

          <div className="row">
            <div className="e-card playing" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <div className="name">
                  <div className="experience-card shadow-lg p-4">
                    <div className="text-center">
                      <a href="https://a2zithub.org/" className="company-link d-block ">
                        <img src="./img/a2z.png" alt="A2Z IT HUB Logo" className="experience-logo" />
                        <span className='text-dark'>A2Z IT HUB (Internship)</span>
                      </a>

                      <span className="ml-2"><strong>Position:</strong> MERN Full Stack Developer</span>
                      <span className=" ml-2"> <strong>Duration:</strong> March 2024 - August 2024</span><br />
                    </div>
                    <hr />
                    <p className="experience- mt-2">
                      Developed web applications using the MERN stack, gaining hands-on experience in full-stack development.
                      Collaborated with teams to deliver optimized solutions and implemented responsive designs for enhanced user experience.
                    </p>

                    <h5 className="mt-3">Key Projects:</h5>
                    <ol className="projects text-dark">
                      <li>
                        <strong>A2Z Clone Website:</strong> Created a replica of the main platform, enhancing user experience and expanding digital presence.
                      </li>
                      <li>
                        <strong>Bus Travel Agency Platform:</strong> Developed a web-based booking system for managing bus schedules and processing payments.
                      </li>
                      <li>
                        <strong>News Portal Website:</strong> Designed a dynamic platform for real-time news articles, improving content management.
                      </li>
                    </ol>

                    <p className="mt-3">
                      I extend my heartfelt gratitude to my mentors, Mr. Pavan Sawant, Mr. Nilesh Borkar, and Mr. Rahul Misal,
                      for their invaluable guidance and support throughout my internship journey.
                    </p>
                  </div>

                  {/* Button to trigger the modal */}
                  <button className="cerbtn" onClick={handleViewCertificate}>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
