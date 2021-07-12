import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Slideshow from './SlideShow';



function Rough2() {
	
    return(
<motion.div 
    	initial={{opacity: 0}}
		animate={{opacity:1}}
		exit={{opacity: 0 }}
		id="fh5co-wrapper">
		<div id="fh5co-page">

        <div className="slide-section">
		<Slideshow/>
        </div>
		
		<div id="fh5co-tours" className="fh5co-section-gray" >
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h3>Our Blogs</h3>
						<p>Visit BusKaraao blog Page.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div >
							<img src="/assets/images/offer2pic.png" alt="Offer 1" className="img-responsive" width="100%" />
							<div className="desc">
								<span></span>
								<h3>Faisal Mover's</h3>
								<span >By Kashii</span>
								<a className="btn btn-primary btn-outline" href="\blog">Blog <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="/assets/images/blog1.png" alt="Offer 1" className="img-responsive" width="100%" />
							<div className="desc">
								<span></span>
								<h3>Socail Distancing</h3>
								<span>By Osama</span>
								<a className="btn btn-primary btn-outline" href="\blog">Blog <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
						<div href="#"><img src="/assets/images/offer5.png" alt="Offer 3" className="img-responsive"  width="100%" />
							<div className="desc">
								<span></span>
								<h3>Bilal Travels</h3>
								<span>By Bilala</span>
								<a className="btn btn-primary btn-outline" href="\blog">Blog <i className="icon-arrow-right22"></i></a>
							</div>
						</div>
					</div>
					<div className="col-md-12 text-center animate-box">
						<p><a className="btn btn-primary btn-outline btn-lg" href="\blog">See All Blogs <i className="icon-arrow-right22"></i></a></p>
					</div>
				</div>
			</div>
		</div>
{/* 
		<div id="fh5co-features">
			<div className="container">
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-hotairballoon"></i>
							</span>
							<div className="feature-copy">
								<h3>Family Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-search"></i>
							</span>
							<div className="feature-copy">
								<h3>Travel Plans</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-wallet"></i>
							</span>
							<div className="feature-copy">
								<h3>Honeymoon</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box">

						<div className="feature-left">
							<span className="icon">
								<i className="icon-wine"></i>
							</span>
							<div className="feature-copy">
								<h3>Business Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>

					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-genius"></i>
							</span>
							<div className="feature-copy">
								<h3>Solo Travel</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>

					</div>
					<div className="col-md-4 animate-box">
						<div className="feature-left">
							<span className="icon">
								<i className="icon-chat"></i>
							</span>
							<div className="feature-copy">
								<h3>Explorer</h3>
								<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
								<p><a href="#">Learn More</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> */}

		
		<div id="fh5co-destination">
			<div className="tour-fluid">
				<div className="row">
					<div className="col-md-12">
						<ul id="fh5co-destination-list" className="animate-box">
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\boyun-valley.jpg" width="100%"  />
									<div class="centered">Boyun Valley</div>
									</div>
								</a>
							</li>
							<li className="one-forth " >
								<a href="#">
									<div className="case-studies-summary">
									{/* <h2 >LAHORE</h2> */}
										<img src="https://images.unsplash.com/photo-1591805491316-2a92e8ec7514?ixid=MnwyMzg4Mzl8MHwxfHNlYXJjaHwxfHxMYWhvcmV8ZW58MHx8fHwxNjIzNDMyNDc3&ixlib=rb-1.2.1" width="100%" />
										<div class="centered">Lahore</div>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\pindi.jpg" width="100%" />
									<div class="centered">Islamabad</div>
									</div>
								</a>
							</li>
							<li className="one-forth " >
								<a href="#">
									<div className="case-studies-summary ">
									<img src="\assets\images\fairy-meadows.jpg" width="100%"  />
									<div class="centered">Fairy Meadows</div>
									</div>
								</a>
							</li>

							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\Naran.png" width="100%"  />
									<div class="centered">NARAN KAGHAN</div>
									</div>
								</a>
							</li>
							<li className="one-half text-center">
								<div className="title-bg">
									<div className="case-studies-summary">
										<h2>Most Popular Destinations</h2>
										<span><a href="\Search">Book Now </a></span>
									</div>
								</div>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\Hunza.jpg" className="img-responsive"  />
									<div class="centered">HUNZA</div>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\Swat.jpg" className="img-responsive"  />
									<div class="centered">SWAT</div>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="\assets\images\Attabad.jpg" className="img-responsive"  />
									<div class="centered">ATTABAD</div>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="https://www.travelershorizon.pk/wp-content/uploads/2018/05/Phandar-Valley111.jpg" className="img-responsive"  />
									<div class="centered">PHANDER LAKE</div>
									</div>
								</a>
							</li>
							<li className="one-forth text-center" >
								<a href="#">
									<div className="case-studies-summary">
									<img src="https://www.geo.tv/assets/uploads/updates/2020-12-15/324517_5155918_updates.jpg" className="img-responsive"  />
										<div class="centered">KHUNJERAB PASS</div>
									</div>
								</a>
							</li>
						</ul>		
					</div>
				</div>
			</div>
		</div>

		
		<div id="fh5co-testimonial" >
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Happy Clients</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;It was a great experience with them really recommend them.Easy Process with
								great and fast customer services.one of the best Bus booking Web Application.&rdquo;</p>
						</blockquote>
						<p className="author">Kashif CR <a href="#" target="_blank"></a> <span className="subtext">Valuable Customer</span></p>
					</div>
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;It was a great experience with them really recommend them.Easy Process with
								great and fast customer services.one of the best Bus booking Web Application.&rdquo;</p>
						</blockquote>
						<p className="author">Uzair Joti <a href="#" target="_blank"></a> <span className="subtext">Valuable Customer</span></p>
					</div>
					
					
				</div>
				<div className="col-md-4">
					<div className="box-testimony animate-box">
						<blockquote>
							<span className="quote"><span><i className="icon-quotes-right"></i></span></span>
							<p>&ldquo;It was a great experience with them really recommend them.Easy Process with
								great and fast customer services.one of the best Bus booking Web Application.&rdquo;</p>
						</blockquote>
						<p className="author">Sohaib Dutt <a href="#"></a> <span className="subtext">Valuable Customer</span></p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

	</div>
	{/* <!-- END fh5co-page --> */}

	</motion.div>

    );

    
}

export default Rough2;