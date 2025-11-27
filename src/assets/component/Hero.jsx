import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './hero.css';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", ".NET Developer", "MERN Developer", "C# Developer", "Freelancer"], 
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section id="home" className="gray_bg py-5">
        <div className="container ">
          <div className="row align-items-center" id='flexcon'>
            <div className="col-lg-6 col-md-6">
              <div className="banner_content">
                <h2>Hello, I am</h2>
                <h1 className="cd-headline clip">
                  <span 
                    ref={typedRef}
                    className="fw_600"
                    style={{ color: '#ff5733' }} 
                  />
                </h1>
                <p>
                  I am a dedicated Full Stack Developer proficient in C#, .NET, ASP.NET MVC, Web Forms, HTML, CSS, JavaScript, 
                  and MERN stack technologies. Passionate about developing efficient and scalable solutions. I am seeking a 
                  .NET developer role to apply my skills and contribute to a dynamic development team.
                </p>
               
                <a href="./img/sandip_chavan_resume.pdf" className="btn herobtn " data-tooltip="Size: 56kb"> 
                  Download Resume
                </a>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="banner-images ">
                <img 
                  src={`./img/sandip.jpg`} 
                  className='rounded img-fluid' 
                  alt="Sandip Chavan" 
                  style={{ 
                    width: '350px', 
                    height: 'auto', 
                    borderRadius: '10%', 
                    objectFit: 'cover', 
                    backgroundColor: 'transparent' 
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
