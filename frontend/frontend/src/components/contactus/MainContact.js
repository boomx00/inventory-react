import ContactHeader from "./ContactHeader";
import ContactInformation from "./ContactInformation"
import ContactFormContainer from "./ContactFormContainer";
import ContactForm from "./ContactForm";
const MainContact=()=>{
    return(
        <div>
            <ContactHeader></ContactHeader>
            <ContactFormContainer>
                
                <ContactForm></ContactForm>
                <ContactInformation></ContactInformation>

            </ContactFormContainer>
        </div>
    )
}
export default MainContact;