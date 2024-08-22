import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-toggleable-sm fixed-top navbar-light bg-faded site-navigation">
				<div className="container">
					<a className="navbar-brand" href="index.html"><p>WEB ADDICTED</p></a>          
				    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				    </button>
				    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
						<ul className="navbar-nav">
						  <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
						  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
						  <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>				
						  <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>				  			
						  <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>			
						  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
						</ul>
				    </div>
				</div>
			</nav>      
    </div>
  )
}
