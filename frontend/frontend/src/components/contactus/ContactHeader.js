import ContactWallpaper from "../../images/builder-wallpaper.jpg";
import "./ContactHeader.css";
const ContactHeader = () => {
  return (
    <div className="contactheader-container">
      <img src={ContactWallpaper}></img>

      <div className="contactheader-text">
        <h1>Hubungi Kami!</h1>
        <div>
            Kami siap untuk mendengar keperluan anda melalui WhatsApp atau tulis email di bawah 
        </div>
      </div>
    </div>
  );
};
export default ContactHeader;
