import React, { useEffect } from 'react'
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact() {
	useEffect(() => {
		AOS.init();
	  }, []);

	return (
		<div>
			<section id="contact" className="gray_bg section-padding">
				<div className="contact-form">
					<div className="container">
						<h2 className="section-title wow flipInX mb-0" data-wow-delay="0.4s">Contact <span>Us</span></h2>
						<div className="row contact-form-area">
							<div className="col-md-6 col-lg-6 col-sm-12 " data-aos="fade-down-right">
								<div className="contact_form wow fadeInLeft sdo">
									<form className="form" action="https://api.web3forms.com/submit" method="POST">
									<input type="hidden" name="access_key" value="88e60982-47c1-464f-9c8f-b5cf9cc10835"></input>

										<h3 className='contactcard-title text-center'>FILL UP</h3>
										<input placeholder="Enter your name" name='name' className="input" type="text"></input>
										<input placeholder="Enter your email" name='email' className="input" type="text"></input>
										<input placeholder="Enter your Mobile Number" name='mobile' className="input" type="text"></input>

										<textarea placeholder="Massage" name='message' className="input" rows={5}></textarea>

										<button>Submit</button>
									</form>

								</div>
							</div>

							<div className="col-md-6 col-lg-6 col-sm-12" data-aos="fade-down-left">
								<div className="contactcard sdo">
									<p className="contactcard-title text-center">Contact Address</p>
									<hr />
									<div className="contact-icon m-3 ">
										<p className="small-desc"><i className="fa fa-map-marker mr-2"></i>
											AT-Borle, Tal-Jamkhed, Dist-Ahmednagar Pin-413201
										</p>
									</div>

									<div className="small-desc m-3">
										<div className="contact-icon">
											<p ><i className="fa fa-envelope mr-2"></i><a href="mailto:chavansandip7499@gmail.com" className='atext' >chavansandip7499@gmail.com</a></p>
										</div>

									</div>
									<div className="small-desc m-3">
										<div className="small-desc">
											<p><i className="fa fa-phone mr-2 "></i><a className='atext' href="https://wa.me/7499743836">+917499743836</a></p>

										</div>
									</div>
									<div className="go-corner">
										<div className="go-arrow">→</div>
									</div>
									<div className="navsocial-icons  ">
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

						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
