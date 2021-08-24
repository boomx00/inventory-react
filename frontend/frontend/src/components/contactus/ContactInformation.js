import "./ContactInformation.css"
import phonelogo from '../../images/phone-logo.png'
import emaillogo from '../../images/email-logo.png'
import whatsapplogo from '../../images/whatsapp-logo.png'
const ContactInformation =() =>{
    return(
        <div>
            <div className="contactinformation-container">
                <h1>Contact Us</h1>
                <div className="information-container">
                    <div className="phone">
                        <img src={phonelogo}></img>
                        <div>
                        <strong><p>+62 81328775858</p></strong>
                        <strong><p>(024) 3511888</p></strong>
                        </div>
                    </div>
                    <div className="wa">
                        <img src={whatsapplogo}></img>
                        <strong><p>+62 81328775858</p></strong>

                    </div>
                    <div className="email">
                        <img src={emaillogo}></img>
                        <strong><p>SuburMakmur@yahoo.com</p></strong>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ContactInformation;