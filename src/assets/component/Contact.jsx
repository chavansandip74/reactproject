import React from 'react'

export default function Contact() {
  return (
    <div>
      	<section id="contact" className="gray_bg section-padding">      
				<div className="contact-form">
					<div className="container">
						<h2 className="section-title wow flipInX" data-wow-delay="0.4s">Contact <span>Us</span></h2>      
						<div className="row contact-form-area">   												
							<div className="col-md-6 col-lg-6 col-sm-12">
								<div className="contact_form wow fadeInLeft">
									<form action="" method="post" id="main_contact_form">
										<div className="contact_input_area">
											<div id="success_fail_info"></div>
											<div className="row">
												<div className="col-12">
													<div className="form-group">
														<input type="text" name="name" className="form-control" placeholder="Name" required="required"/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
														<input type="email" name="email" className="form-control" placeholder="Email" required="required"/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
														<input type="text" name="subject" className="form-control" placeholder="Subject" required="required"/>
													</div>
												</div>
												<div className="col-12">
													<div className="form-group">
														<textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
													</div>
												</div>
												<div className="col-12 text-center">
													<button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-secondary ct_btn" title="Submit Your Message!">Send Message</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-6 col-lg-6 col-sm-12">
								<div className="footer-right-area wow fadeInRight">
									<h4>Contact Address</h4>
									<div className="footer-right-contact">
										<div className="single-contact">
											<div className="contact-icon">
											  <i className="fa fa-map-marker"></i>
											</div>
											<p>East London, England</p>
										</div>
										<div className="single-contact">
											<div className="contact-icon">
											  <i className="fa fa-envelope"></i>
											</div>
											<p><a href="#">@Example@gmail.com</a></p>
											<p><a href="#">@Example@gmail.com</a></p>
										</div>
										<div className="single-contact">
											<div className="contact-icon">
											  <i className="fa fa-phone"></i>
											</div>
											<p><a href="#">+ (00) 125 456 789</a></p>
											<p><a href="#">+ (00) 125 344 789</a></p>
										</div>
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
