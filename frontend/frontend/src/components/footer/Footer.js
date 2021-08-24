import "./Footer.css";
import googlemaplogo from "../../images/googlemap-logo.png";
import facebooklogo from "../../images/facebook-logo.png";
import instagramlogo from "../../images/instagram-logo.png";
import whatsapplogo from "../../images/whatsapp-logo.png";
import smlogo from "../../images/logo-sm-png.png";
const footer = () => {
  return (
    <div className="footer-start">
      {/* <hr></hr> */}

      <div className="footer-container">
        <div className="footer-image">
          <img src={smlogo}></img>
        </div>
        <div>
          <label>
            <strong>Address:</strong>
          </label>
          <div>Jl. MT. Haryono No.65, Purwodinatan, Semarang Tengah</div>
        </div>
        <div>
          <label>
            <strong>Phone Number:</strong>
          </label>
          <div>(024) 3511888</div>
        </div>
        <div>
          <label>
            <strong>Whatsapp:</strong>
          </label>
          <div>089660137269</div>
        </div>
        <div className="logos">
          <a
            href="https://www.google.com/maps/dir//Toko+Subur+Makmur/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e70f35463d94545:0xa3829f66e38435ea!2m2!1d110.43106999999999!2d-6.97223"
            target="_blank"
          >
            <img src={googlemaplogo}></img>
          </a>
          <img className="logoalign" src={facebooklogo}></img>
          <a href="https://www.instagram.com/suburmakmur/" target="_blank">
            <img className="logoalign" src={instagramlogo}></img>
          </a>
          <a href="https://wa.me/+6287832287070" target="_blank"><img className="logoalign" src={whatsapplogo}></img>
          </a>
        </div>
       
      </div>
      <hr></hr>
      <div className="footer-bottom">TB SUBUR MAKMUR</div>
    </div>
  );
};

export default footer;
