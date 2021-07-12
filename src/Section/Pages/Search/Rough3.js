import React from 'react';
import './Rough3.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiIcon from '@material-ui/icons/Wifi';
import TvIcon from '@material-ui/icons/Tv';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

// For Drop Down filter


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		  },
	  width: '100%',
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  fontWeight: theme.typography.fontWeightRegular,
	},
  }));

//   Drop down end here

export const Rough3 = () => {

	const classes = useStyles();

	const [expanded, setExpanded] = React.useState('panel1');
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : true);
	  };

    return (
        <div>
           


<div className="breacrumb-area bg-light-grey-1 ">
    <div className="container ">
    </div>
</div>

<div className=" bg-blue padding-tb-10">
    <div className="container">
        <div className="row">
            
            <div className="col-sm-3">
              <input type="text" className="form-control" placeholder="From" />
            </div>
            
            <div className="col-sm-3">
              <input type="text" className="form-control" placeholder="To" />
            </div>

            <div className="col-sm-3">
              <input type="date" className="form-control cal-form" />
            </div>
            
            
            <div className="col-sm-2">
              <button type="button" className="btn-primary btn-lg btn-block site-btn"><i className="fa fa-search"></i> Search</button>
            </div>
           
        </div>
    </div>
</div>
<div className="search-result-title">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h5>4 matches found for: Karachi To Islamabad - 5</h5>
                <hr/>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-md-9 ">
            <div className="crane-grid-listing-block">
                <div className="row">
                     <div className="col-md-12">
	          <div className="crane-grid-listing clearfix">
	              <div className="col-md-3 crane-image-block ">
	                  <div className="crane-list-img">
	                      <img className="img-responsive"src="/assets/images/Daewoo_logo.png" />
	                  </div>
	              </div>
	              <div className="col-md-7">
	                  <div className="crane-list-content">
	                      <div className="crane-title">
	                          <h3>Daewoo</h3>
                              <hr/>
	                      </div>
	                      
	                      <div className="crane-phone">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                          </ul>
	                      </div>
	                      <div className="crane-address">
	                          <ul className="list-inline">
                              <li><i className="fa fa-map-marker"></i></li>
	                              <li> Karachi--------Islamabad</li>
                                  <i className="fa fa-map-marker"></i>
	                          </ul>
	                      </div>
	                      <div className="crane-category">
                          <ul className="list-inline">
                          <li><TvIcon /></li>
                          <li> < WifiIcon /></li>
                          <li> <RestaurantIcon/></li>
                          <li> <AcUnitIcon/></li>
                          </ul>
	                      </div>

	                  </div>
	              </div>
	              <div className="col-md-2 padding-b-10 ">
	                  <div className="margin-t-40 hidden-xs"></div>
	                  <button type="button"className=" btn-block">Book Now</button>
	              </div>
	          </div>
	         
	      </div>
                 </div>
                 <div className="row">
                     <div className="col-md-12">
	          <div className="crane-grid-listing clearfix">
	              <div className="col-md-3 crane-image-block ">
	                  <div className="crane-list-img">
	                      <img className="img-responsive"src="/assets/images/Faisal-logo.jpg" />
	                  </div>
	              </div>
	              <div className="col-md-7">
	                  <div className="crane-list-content">
	                      <div className="crane-title">
	                          <h3>Faisal Mover's</h3>
                              <hr/>
	                      </div>
	                      
	                      <div className="crane-phone">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                          </ul>
	                      </div>
	                      <div className="crane-address">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-map-marker"></i></li>
	                              <li> Karachi--------Islamabad</li><i className="fa fa-map-marker"></i>
	                          </ul>
	                      </div>
	                      <div className="crane-category">
                          <ul className="list-inline">
                          <li><TvIcon /></li>
                          <li> < WifiIcon /></li>
                          <li> <RestaurantIcon/></li>
                          <li> <AcUnitIcon/></li>
                          </ul>
	                      </div>
	                  </div>
	              </div>
	              <div className="col-md-2 padding-b-10 ">
	                  <div className="margin-t-40 hidden-xs"></div>
	                  <button type="button"className=" btn-block">Book Now</button>
	              </div>
	          </div>
	         
	      </div>
                 
                 </div>
                 <div className="row">
                     <div className="col-md-12">
	          <div className="crane-grid-listing clearfix">
	              <div className="col-md-3 crane-image-block ">
	                  <div className="crane-list-img">
	                      <img className="img-responsive"src="/assets/images/Faisal-logo.jpg" />
	                  </div>
	              </div>
	              <div className="col-md-7">
	                  <div className="crane-list-content">
	                      <div className="crane-title">
	                          <h3>Faisal Mover's</h3>
                              <hr/>
	                      </div>
	                      
	                      <div className="crane-phone">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                              <li><i className="fa fa-phone"></i> +92+090078601</li>
	                          </ul>
	                      </div>
	                      <div className="crane-address">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-map-marker"></i></li>
	                              <li> Karachi--------Islamabad</li><i className="fa fa-map-marker"></i>
	                          </ul>
	                      </div>
	                      <div className="crane-category">
                          <ul className="list-inline">
                          <li><TvIcon /></li>
                          <li> < WifiIcon /></li>
                          <li> <AcUnitIcon/></li>
                          </ul>
	                      </div>
	                  </div>
	              </div>
	              <div className="col-md-2 padding-b-10 ">
	                  <div className="margin-t-40 hidden-xs"></div>
	                  <button type="button"className="  btn-block">Book Now</button>
	              </div>
	          </div>
	         
	      </div>
                 </div>
                 <div className="row">
                     <div className="col-md-12">
	          <div className="crane-grid-listing clearfix">
	              <div className="col-md-3 crane-image-block ">
	                  <div className="crane-list-img">
	                      <img className="img-responsive" src="/assets/images/Kainaat-logo.png" />
	                  </div>
	              </div>
	              <div className="col-md-7">
	                  <div className="crane-list-content">
	                      <div className="crane-title">
	                          <h3>Kainaat Traveler's</h3>
                              <hr/>
	                      </div>
	                      
	                      <div className="crane-phone">
	                          <ul className="list-inline">
	                              <li><i className="fa fa-phone"></i> +92+54545665</li>
	                              <li><i className="fa fa-phone"></i> +92+54545665</li>
	                          </ul>
	                      </div>
	                      <div className="crane-address">
	                          <ul className="list-inline">
                              <li><i className="fa fa-map-marker"></i></li>
	                              <li> Karachi--------Islamabad</li><i className="fa fa-map-marker"></i>
	                          </ul>
	                      </div>
	                      <div className="crane-category">
                          <ul className="list-inline">
                          <li><TvIcon /></li>
                          <li> < WifiIcon /></li>
                          <li> <RestaurantIcon/></li>
                          <li> <AcUnitIcon/></li>
                          </ul>
	                      </div>
	                  </div>
	              </div>
	              <div className="col-md-2 padding-b-10 ">
	                  <div className="margin-t-40 hidden-xs"></div>
	                  <button type="button"className=" btn-block">Book Now</button>
	              </div>
	          </div>
	         
	      </div>
                 </div>
            </div>
            
        </div>
        <div className="col-md-3 ">
            <div className="list-group-hover sidebar-widget-1">
	            <ul className="list-unstyled">
            <li><h3 className="list-group-item  bg-active"> Filter  </h3></li>
            <li>
			<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Bus Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <label class="filter-container">Executive
  			<input type="checkbox"  />
  			<span class="checkmark"></span>
			</label>
			<label class="filter-container">Executive Plus
  			<input type="checkbox" />
  			<span class="checkmark"></span>
			</label>
			<label class="filter-container">Standard Plus Executive
			<input type="checkbox" />
			<span class="checkmark"></span>
			</label>
          </Typography>
        </AccordionDetails>
      </Accordion></li>


            <li><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
		  className="filter-heading"
        >
          <Typography className={classes.heading} >Bus Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  <label class="filter-container">Faisal Mover's
  			<input type="checkbox"  />
  			<span class="checkmark"></span>
			</label>
			<label class="filter-container">Daewoo
  			<input type="checkbox" />
  			<span class="checkmark"></span>
			</label>
			<label class="filter-container">Kainaat
			<input type="checkbox" />
			<span class="checkmark"></span>
			</label>
			<label class="filter-container">SkyWays
			<input type="checkbox" />
			<span class="checkmark"></span>
			</label>
          </Typography>
        </AccordionDetails>
      </Accordion></li>


            <li><Button variant="contained"  className="list-group-item"> Filter Now</Button> </li>
            </ul>
         </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Rough3;