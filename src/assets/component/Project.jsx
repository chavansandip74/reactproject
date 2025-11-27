import React, { useEffect } from 'react';
import "./project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div id="blog" className="gray_bg blog-area section-padding">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">My <span>Projects</span></h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/morya.png" className="blog-image" alt="Morya Car Care" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Morya Car Care Website</h4></a>
                    <small><i className="fa fa-clock-o"></i>Aug 2024</small>
                    <span>| Full Stack Development</span>
                    <p>A comprehensive website for Morya Car Care, featuring bill creation and printing with an attractive design.</p>
                    <a href="http://ec2-184-73-138-98.compute-1.amazonaws.com:1000/"> <button className="servicebtn">Visit Here</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/online_courses.jpg" className="blog-image" alt="Online Courses" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Online Courses Website</h4></a>
                    <small><i className="fa fa-clock-o"></i>Jan 2024</small>
                    <span>| Full Stack Development</span>
                    <p>Developed a dynamic learning platform with secure payment and Gmail verification.</p>
                    <a href="https://github.com/chavansandip74/coursewebsite" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/hostel_management.jpeg" className="blog-image" alt="Hostel Management" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Hostel Management System</h4></a>
                    <small><i className="fa fa-clock-o"></i>Jul 2023</small>
                    <span>| Full Stack Development</span>
                    <p>Built a system for direct communication between students and hostel authorities.</p>
                    <a href="https://github.com/chavansandip74/hostelmanagement" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/blog_platform.jpg" className="blog-image" alt="Blogging Platform" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Blogging Platform</h4></a>
                    <small><i className="fa fa-clock-o"></i>May 2024</small>
                    <span>| Full Stack Development</span>
                    <p>Launched a new platform featuring Node.js, MySQL, secure registration, and AWS hosting.</p>
                    <a href="https://github.com/chavansandip74/bloggingweb" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/car_rental.jpg" className="blog-image" alt="Car Rental" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Car Rental Website</h4></a>
                    <small><i className="fa fa-clock-o"></i>Aug 2024</small>
                    <span>| Full Stack Development</span>
                    <p>Developed a fully functional car rental service website with advanced booking options.</p>
                    <a href="http://ec2-184-73-138-98.compute-1.amazonaws.com:1000/" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/bus_ticket.jpg" className="blog-image" alt="Bus Ticket Booking" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Bus Ticket Booking Website</h4></a>
                    <small><i className="fa fa-clock-o"></i>Feb 2024</small>
                    <span>| Full Stack Development</span>
                    <p>Created a seamless online platform for bus ticket booking with real-time availability.</p>
                    <a href="http://ec2-184-73-138-98.compute-1.amazonaws.com:1000/" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/news_agency.jpg" className="blog-image" alt="News Agency" /></a>
                  </div>
                  <div className="blog-info text-center ">
                    <a href="#"><h4>News portal  Website</h4></a>
                    <small><i className="fa fa-clock-o"></i>April 2024</small>
                    <span>| Full Stack Development</span>
                    <p>Developed a platform for managing newspaper subscriptions and delivery logistics  using the MERN stack.</p>
                    <a href="http://ec2-184-73-138-98.compute-1.amazonaws.com:1000/"   ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/drone_website.jpg" className="blog-image" alt="Drone Website" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Drone Website (MERN Stack)</h4></a>
                    <small><i className="fa fa-clock-o"></i>July 2024</small>
                    <span>| Full Stack Development (MERN)</span>
                    <p>
                      Built a responsive website using the MERN stack for showcasing drone products and services.
                      Key features include user authentication, drone booking system, and a gallery of aerial photography.
                    </p>
                    <a href="http://your-drone-website-link.com" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="./img/star_hotel.jpg" className="blog-image" alt="Star Hotel Website" /></a>
                  </div>
                  <div className="blog-info text-center">
                    <a href="#"><h4>Star Hotel Website (MERN Stack)</h4></a>
                    <small><i className="fa fa-clock-o"></i>September 2024</small>
                    <span>| Full Stack Development (MERN)</span>
                    <p>
                      Developed a luxury hotel website using the MERN stack. Features include real-time room availability, online booking,
                      payment gateway integration, and dynamic pricing for peak seasons.
                    </p>
                    <a href="http://your-hotel-website-link.com" ><button className="servicebtn">Github Link</button></a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
