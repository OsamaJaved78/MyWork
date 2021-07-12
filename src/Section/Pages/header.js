import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';

function Header() {
    return (

		<header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><Link to=""><i className="fa fa-bus"></i>Bus karaao</Link></h1>
					{/* <!-- START #fh5co-menu-wrap --> */}
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li ><Link to="">Home</Link></li>
						
      				<li class="dropdown-submenu">
						<a class="test" tabindex="-1" href="#">Services <span class="caret"></span></a>
						<ul class="fh5co-sub-menu">
						<li><a tabindex="-1" href="#">Busses</a></li>
						<li class="dropdown-submenu">
							<a class="test" href="#">Vacation <span class="caret"></span></a>
							<ul class="fh5co-sub-menu">
							<li><a href="#">Karachi</a></li>
							<li><a href="#">Islamabad</a></li>
							<li><a href="#">Gali Jhangir</a></li>
							<li><a href="#">Islamabad</a></li>
							<li><a href="#">KPK</a></li>
							</ul>
						</li>
						</ul>
					</li>




							<li><Link to="/blog">Blog</Link></li>
							<li><Link to="/About">About Us</Link></li>
							<li><Link to= "/Contact">Contact</Link></li>
							<li><Link to="/Login">Login/Signup</Link></li>
							
						</ul>
					</nav>
				</div>
			</div>
		</header>
    )
}

export default Header;