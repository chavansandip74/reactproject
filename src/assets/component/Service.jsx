import React from 'react'

export default function Service() {
  return (
    <div>
      <section id="services" className="gray_bg services section-padding">
				<h2 className="section-title wow flipInX" data-wow-delay="0.4s">My <span>Services</span></h2>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInDown" data-wow-delay="0.3s">
								<div className="icon">
									<img src="src/assets/img/service/icon-responsive.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Web Design</a></h3>
									<p>Crafting visually appealing and user-friendly digital experiences tailored to your brand's needs.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInDown" data-wow-delay="0.6s">
								<div className="icon">
									<img src="src/assets/img/service/icon-email.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Development</a></h3>
									<p>Building robust and scalable websites with cutting-edge technologies to enhance online presence.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInDown" data-wow-delay="0.9s">
								<div className="icon">
									<img src="src/assets/img/service/icon-lock.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Graphic Design</a></h3>
									<p>Transforming concepts into captivating visuals that communicate your message effectively.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInLeft" data-wow-delay="0.9s">
								<div className="icon">
									<img src="src/assets/img/service/icon-easy.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Responsive Design</a></h3>
									<p>Ensuring seamless user experience across all devices with adaptable and fluid website layouts.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInUp" data-wow-delay="0.9s">
								<div className="icon">
									<img src="src/assets/img/service/service-icon-bg.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Marketing</a></h3>
									<p> Implementing strategic digital marketing solutions to drive traffic, engagement, and conversions.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-12">
							<div className="services-item wow fadeInRight" data-wow-delay="0.9s">
								<div className="icon">
									<img src="src/assets/img/service/icon-responsive.svg" alt=""/>
								</div>
								<div className="services-content">
									<h3><a href="#">Support</a></h3>
									<p>Providing reliable ongoing maintenance and support to keep your website running smoothly and securely.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}
