import './Homeimg.css'
import logo from './img/img.jpg'

function Homeimg() {
  return (
    <div className="homeImgMain">
      <div className="home-content">
        <h1>
          Hi it's<span> Mahmoud</span>
        </h1>
        <h3 className="text-animation">
          i'm a <span></span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          numquam dolores dolorem adipisci recusandae, ex nesciunt. Voluptatum
          voluptates quasi tempora hic facilis veritatis consequuntur doloribus
          dolor provident 
        </p>

        <div className="social-icons">
          <a href="#"><i class='bx bxl-linkedin' ></i></a>
          <a href="#"><i class='bx bxl-github' ></i></a>
          <a href="#"><i class='bx bxl-instagram' ></i></a>
          <a href="#"><i class='bx bxl-twitter' ></i></a>
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
