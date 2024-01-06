import Typewriter from "typewriter-effect";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import './Slider.css'

function ImgSlider() {
  return (
    <div className="carousel-container">

        <div className='slider-container'>
          <figure>
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
            <img src={img3} alt='img3'/>
            <img src={img4} alt='img4'/>
            <img src={img5} alt='img5'/>
          </figure>
        </div>
      <div className="carousel-text">
        <span className="text-2xl sm:text-4xl lg:text-6xl">Welcome To </span> 
        <br/>
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