
import React from 'react'
import { useHistory } from "react-router-dom";
import './BookingForm.css';

export const BookingForm = () => {

	let history = useHistory();

  const routeChange = () => {
    history.push('/Search')
  }
	  
    return (
        // <div id="booking" className="section-form">
		// <div className="section-center">
			<div className="container" id="container-form">
				<div className="row">
					<div className="booking-form">
						<form>
							<div className="row no-margin">
								<div className="col-md-2">
									<div className="form-group">
										<span className="form-label-home">From:</span>
										<input className="form-control-home" type="text" placeholder="Karachi" required/>
									</div>
								</div>
                                <div className="col-md-2">
									<div className="form-group">
										<span className="form-label-home">To:</span>
										<input className="form-control-home" type="text" placeholder="Gali Jhangir" required/>
									</div>
								</div>
										<div className="col-md-3">
											<div className="form-group">
												<span className="form-label-home">Date:</span>
												<input className="form-control-home" type="date" required />
											</div>
										</div>
										<div className="col-md-2">
											<div className="form-group">
                                            <span className="form-label-home">Seats</span>
												<input className="form-control-home" type="number" required placeholder="Number of Seats" />
												<span className="select-arrow"></span>
											</div>
										</div>
                                        
                                        <div className="col-md-3">
									<div className="form-btn">
										<button className="submit-btn" type="submit" onClick={routeChange}>Check availability</button>
									</div>
							</div>
								
								</div>
                                
						</form>
					</div>
				</div>
			</div>
	// 	</div>
	// </div>

    )
}

export default BookingForm;


