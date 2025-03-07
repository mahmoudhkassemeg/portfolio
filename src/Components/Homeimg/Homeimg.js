import './Homeimg.css'
import logo from './img/img.jpg'
import  'boxicons';

function Homeimg() {
  
  return (
    
    <div className="homeImgMain">
      
      <div className="home-content">
        <h1 className='h1'>
          Hi it's<span> Mahmoud</span>
        </h1>
        <h3 className="text-animation">
          i'm a <span className='span'></span>
        </h3>
        <p className='p'>
        Hello,
        There is no limit in passion.
        You can find my skills in almost any tech department.
        Started from c++ passing throug Web Developer, IoT, 
        Mechatronics to Video production and 3d Graphics.
        Just send your inquiry to start as soon as possible
        </p>

        <div className="social-icons">
          <a href="#"><i className='bx bxl-linkedin' ></i></a>
          <a href="#"><i className='bx bxl-github' ></i></a>
          <a href="#"><i className='bx bxl-instagram' ></i></a>
          <a href="#"><i className='bx bxl-twitter' ></i></a>
        </div>

        <div className="btn-group">
          <a href="#" className="btn">
            Hire
          </a>
          <a href="#" className="btn">
            Contact
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
export default Homeimg;
