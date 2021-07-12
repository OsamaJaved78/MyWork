import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from './slider/img/slide1.jpg';
import image2 from './slider/img/slide2.jpg';
import image3 from './slider/img/slide3.jpg';
import BookingForm from './Bookingform/BookingForm';

const fadeImages = [
  image1,
  image2,
  image3
];

const fadeProperties = {
  duration: 1000,
  indicators:true
};
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} className="img-responsive" style={{width: "100%"}}   />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container" >
            <img src={fadeImages[1]} className="img-responsive" style={{width: "100%"}} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} className="img-responsive" style={{width: "100%"}} />
          </div>
        </div>
      </Fade>
      
      <BookingForm/>
    </div>
  )
}
export default Slideshow;