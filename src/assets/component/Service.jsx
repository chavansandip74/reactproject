import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Service() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section id="services" className="gray_bg services section-padding">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">My <span>Services</span></h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
                <div className="icon">
                  <img src="./img/service/icon-responsive.svg" alt="Web Development"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Full Stack Development</a></h2>
                  <p>Proficient in building end-to-end web applications using C#, ASP.NET MVC, Web Forms, and the MERN stack, focusing on delivering efficient and scalable solutions.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
                <div className="icon">
                  <img src="./img/service/icon-email.svg" alt="Backend Development"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Backend Development</a></h2>
                  <p>Expertise in server-side development using .NET Core, Node.js, Express.js, SQL Server, and MySQL to create robust, secure, and scalable backend systems.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
                <div className="icon">
                  <img src="./img/service/icon-lock.svg" alt="Frontend Development"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Frontend Development</a></h2>
                  <p>Skilled in developing responsive and dynamic user interfaces using React, HTML, CSS, JavaScript, and Bootstrap to enhance user experience across devices.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInLeft" data-wow-delay="0.9s">
                <div className="icon">
                  <img src="./img/service/icon-easy.svg" alt="Responsive Design"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Responsive Design</a></h2>
                  <p>Ensuring seamless and adaptive design for web applications across all devices, utilizing fluid layouts and modern CSS techniques.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInUp" data-wow-delay="0.9s">
                <div className="icon">
                  <img src="./img/service/service-icon-bg.svg" alt="Database Management"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Database Management</a></h2>
                  <p>Proficient in SQL Server, MySQL, PostgreSQL, and MongoDB, ensuring optimal database performance, data integrity, and scalability for web applications.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12" data-aos="zoom-in-down">
              <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                  <img src="./img/service/icon-responsive.svg" alt="Cloud & DevOps"/>
                </div>
                <div className="services-content">
                  <h2><a href="#" className='coloror'>Cloud & DevOps</a></h2>
                  <p>Experience in deploying and managing applications on cloud platforms like AWS, and expertise in using Git, GitHub, and CI/CD pipelines to streamline development workflows.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
