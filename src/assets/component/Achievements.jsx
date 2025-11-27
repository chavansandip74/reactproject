import React, { useEffect, useState } from 'react';
import './achievements.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Achievements() {
  useEffect(() => {
    AOS.init();
  }, []);

  const achievements = [
   
    {
      title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      date: 'August 2024',
      description: 'Completed Oracle Cloud certification focused on Generative AI.',
      imageUrl: './img/certificate/oracle.png', // Update with actual image URL
    },
    {
      title: 'MongoDB Training Program',
      date: 'August 2024',
      description: 'Completed comprehensive MongoDB training by FocusIT Tech Systems Pvt Ltd.',
      imageUrl: './img/certificate/mongodb.png', // Update with actual image URL
    },
    {
      title: 'React JS Tutorial and MERN Stack Fundamentals',
      date: 'July 2024',
      description: 'Completed courses on React JS from Hacker Rank.',
      imageUrl: './img/certificate/react.png', // Update with actual image URL
    },
    {
      title: 'Full Stack Development Internship',
      date: 'March 2024 - August 2024',
      description: '6-month internship focusing on MERN Stack at A2Z IT HUB.',
      imageUrl: './img/certificate/oracle.png', // Update with actual image URL
    },
    {
      title: ' Full Stack Certificate from Yhills!',
      date: '2023',
      description: 'Acquired certificates from Infosys Springboard for full stack development.',
      imageUrl: './img/certificate/yhills.png', // Update with actual image URL
    },
    {
      title: 'Certificate in MERN Full Stack Development',
      date: 'July 2024',
      description: 'MERN Stack Certificate from Infosys Springboard ',
      imageUrl: './img/certificate/mern.png', // Update with actual image URL
    },
    {
      title: 'Communication and Soft Skills',
      date: '2023',
      description: 'Completed courses on communication and soft skills from TCS iON.',
      imageUrl: './img/certificate/softskills.png', // Update with actual image URL
    },
    {
      title: 'Python Programming Certificate',
      date: '2023',
      description: 'Acquired Python Programming certificate from Infosys Springboard.',
      imageUrl: './img/certificate/python.jpg', // Update with actual image URL
    },
    {
      title: 'Internship Certificate at CodSoft',
      date: '2024',
      description: 'Internship focusing on MERN Full Stack Development at CodSoft.',
      imageUrl: './img/certificate/codesoft.jpg', // Update with actual image URL
    },
    {
      title: 'Internship Certificate at technohack',
      date: '2024',
      description: 'Internship focusing on MERN Full Stack Development at technohack.',
      imageUrl: './img/certificate/technohackscertificate.jpg', // Update with actual image URL
    },
    {
      title: 'MERN Stack Fundamental',
      date: '2024',
      description: 'Completed MERN Stack course form Great Learning Academy.',
      imageUrl: './img/certificate/merngla.png', // Update with actual image URL
    },
    {
      title: 'React JS certificate',
      date: 'July 2024',
      description: 'Completed courses on React JS from Great Learning Academy .',
      imageUrl: './img/certificate/react.png', // Update with actual image URL
    },
    // Add more achievements as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Change this number to show more or fewer items per page
  const totalPages = Math.ceil(achievements.length / itemsPerPage);

  // Calculate the current achievements to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = achievements.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination button click handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id='certifications' className="container achievements-section ">
      <h2 className="section-title wow flipInX" data-wow-delay="0.4s">Achievements &<span> Certifications</span></h2>

      <div className="row ">
        {currentItems.map((achievement, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="zoom-out-down">
            <div className="card achievement-card shadow-sm h-100 sdo">
              <img src={achievement.imageUrl} className="card-img-top achievement-image" alt={achievement.title} />
              <div className="card-body p-2 ">
                <h5 className="card-title ">{achievement.title}</h5>
                <p className="text-muted text-right">{achievement.date}</p>
                <p className="card-text ">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination justify-content-center mt-2">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button 
                className="page-link ml-2" 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
