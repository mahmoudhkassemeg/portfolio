import { FaX, FaXTwitter } from "react-icons/fa6";
import "./Homeimg.css";
import logo from "./img/img.jpg";
import 'boxicons';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from "react-icons/ai";
import { LiaLinkedinIn } from "react-icons/lia";


function Homeimg() {
  return (
    <div className="homeImgMain">
      <div className="home-content">
        <h1 className="h1">
          Hi it's<span> Mahmoud</span>
        </h1>
        <h3 className="text-animation">
          i'm a <span className="span"></span>
        </h3>
        <p className="p">
          Hello, There is no limit in passion. You can find my skills in almost
          any tech department. Started from c++ passing throug Web Developer,
          IoT, Mechatronics to Video production and 3d Graphics. Just send your
          inquiry to start as soon as possible
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mahmoudkassemeg" target="_blank">
          <LiaLinkedinIn />
          </a>
          <a href="https://github.com/mahmoudhkassemeg/" target="_blank">
            <FaGithub/>
          </a>
          <a href="https://www.instagram.com/mahmoud_kassemeg" target="_blank">
          <AiOutlineInstagram />
          </a>
          <a href="https://x.com/mahmoudkasssem" target="_blank">
            <FaXTwitter/>
          </a>
        </div>

        <div className="btn-group">
          <a href="#" className="btn">
            Hire
          </a>
          <a href="#" className="btn">
            Contact
          </a>
        </div>
        <div className="home-img">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Homeimg;
