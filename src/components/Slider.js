import Slider from "infinite-react-carousel";
import Typewriter from "typewriter-effect";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import './Slider.css'

function ImgSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4500,
    className: "slide_box",
    dots: false,
    virtualList: true,
    
    arrows:false,
    
  };
  return (
    <div className="carousel-container">
      
      <Slider {...settings}>
        <div className="row">
          <img
            src={img1}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img2}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img3}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img4}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img5}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
      <div className="carousel-text">
        <span>Welcome To </span> 
        <Typewriter
        options={{
          strings: [
            "FitSoul",
            "Fit Mind",
            "Fit Self",
            "Fit Life",
          ],
          autoStart: true,
          loop: true,
          pauseFor: 2000,
        }}
        />
        </div>
    </div>
  );
}

export default ImgSlider;
