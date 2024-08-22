import React from 'react'

export default function Hero() {
  return (
    <div>
      	<section id="home" className="gray_bg">
				<div id="particles-js"></div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="banner_content">
								<h3>Hi There,</h3>
								<h1 className="cd-headline clip">
									<span className="fw_600">I Am Web Dev</span>
									<span className="cd-words-wrapper">
										<b className="is-visible fw_600"></b>
										<b className="fw_600">Web Designer</b>
										<b className="fw_600">Web Developer</b>
										<b className="fw_600">Photographer</b>
									</span>
								</h1>
								<p>I'm a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design and many more...</p>
								<a href="#" className="btn btn-secondary banner_btn">Hire Me</a>								
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="banner-images">
								<img src="src/assets/img/sandip.jpg" className='rounded' alt=""/>
							</div>
						</div>
					</div>
				</div>
				
			</section>
    </div>
  )
}
