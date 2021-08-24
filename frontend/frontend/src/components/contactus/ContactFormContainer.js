import './ContactFormContainer.css'
const ContactFormContainer=(props)=>{
    return(
        <div>
            <div className="contactform-container">
                    {props.children}
            </div>
        </div>
    )
}

export default ContactFormContainer