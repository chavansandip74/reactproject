import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Work() {
	useEffect(() => {
		AOS.init();
	  }, []);

  return (
    <div>
      	<section className="gray_bg funfacts-area pb_80 mt-5 ">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 " data-aos="flip-left">
							<div className="funfact">
								<i className="icofont-printer"></i>
								<h3><span className="counterUp">8</span>+</h3>
								<p>Personal Projects</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3" data-aos="flip-left">
							<div className="funfact">
								<i className="icofont-users"></i>
								<h3><span className="counterUp">3</span>+</h3>
								<p>Group Projects</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3" data-aos="flip-left">
							<div className="funfact">
								<i className="icofont-users-alt-5"></i>
								<h3><span className="counterUp">2</span>+</h3>
								<p>Client Projects</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3" data-aos="flip-left">
							<div className="funfact">
								<i className="icofont-award"></i>
								<h3><span className="counterUp">3</span>+</h3>
								<p>Internships</p>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}
