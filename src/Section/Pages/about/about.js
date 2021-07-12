import React from 'react'
import './about.css';
import { AnimatePresence,motion } from "framer-motion";

 const About = () => {
    
    return (
        <motion.div id="about-bg"
		initial={{opacity: 0}}
		animate={{opacity:1}}
		exit={{opacity: 0 }}
		>
<section id="about">
<div className="container">
		<div className='row'>
			<div className="col-md-12 col-sm-12 text-center">
                <div id='mainDiv'>
				<h1 className="heading-bold line borderLeft">ABOUT US</h1>
                </div>
				<h2 className="subheading">WE ARE THE TEAM OF Buskaroo</h2>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
				<i className="fa fa-cloud"></i>
					<h3 id="about-h3">Planning</h3>
					<p id="about-par">Our Team is composed of highly qualified leader's in Web Technology. Each Board Member has proven experience, skills and current expertise aligned to our business goal.</p>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
				<i className="fa fa-laptop"></i>
					<h3 id="about-h3">Developing</h3>
					<p id="about-par">It is a user friendly application where people can reserve their tickets before hand, review bus schedule and reserve seat through Our Web Application</p>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 " data-wow-delay="1s">
				<i className="fa fa-globe"></i>
					<h3 id="about-h3">Launching</h3>
					<p id="about-par">It is founded in 23-2020 and Publish in 2022. </p>
			</div>
			<hr/>
			<div className="col-md-6 col-sm-6 " data-wow-delay="0.6s">
				<img src="/assets/images/about.jpg" className="img-responsive" alt="about img" />
			</div>
			<div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
				<h2 id= "about-h3">Our Focus</h2>
				<p id="about-par">By investing in technology that takes the friction out of travel, Bookkaraoo.pk seamlessly connects millions of travelers to memorable experiences. 
                    Our mission is to make it easier for everyone to experience the world.</p>
				<span><i className="fa fa-mobile"></i> Easy Access</span>
					<div className="progress">
						<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>  {/*style="width: 80%;"*/}
					</div>
				<span><i className="fa fa-link"></i> Available on Web Application</span>
					<div className="progress">
						<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" ></div> {/*style="width: 90%;"*/}
					</div>
				<span><i className="fa fa-cloud"></i> Experienced Team</span>
					<div className="progress">
						<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>  {/*style="width: 75%;"*/}
					</div>
			</div>
            </div>
            </div>

        {/* Our Team */}
        <section id="team">
	<div className="container">
		<div className='row'>
			<div className="col-md-12 col-sm-12">
				<h1 className="heading-bold">OUR TEAM</h1>
				<h2 className="subheading">CREATIVE TALENTS FROM PAKISTAN</h2>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="0.9s">
				<div className="team-wrapper">
					<img src="/assets/images/Source.jpg" className="img-responsive" alt="team img" />
						<div className="team-des">
							<h4>Osama</h4>
							<h3 id="about-h3">Designer</h3>
						</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1.3s">
				<div className="team-wrapper">
					<img src="/assets/images/Source.jpg" className="img-responsive" alt="team img" />
						<div className="team-des">
							<h4>Osama</h4>
							<h3 id="about-h3">Leader</h3>
						</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6 wow fadeIn" data-wow-delay="1.6s">
				<div className="team-wrapper">
					<img src="/assets/images/Source.jpg" className="img-responsive" alt="team img" />
						<div className='team-des'>
							<h4>Osama</h4>
							<h3 id="about-h3">Developer</h3>
						</div>
				</div>
			</div>
		</div>
	</div>
</section>

</section>
</motion.div>

    )
}

export default About;