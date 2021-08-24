import './ContactForm.css'

const ContactForm =()=>{
    return(
        <div className="form-container">
            <div className="form-position">
                <form> 
                    <h3>isi form dibawah sesuai kebutuhan</h3>
                    <label>
                        <strong>EMAIL:</strong>
                    </label>
                    <input type="text"></input>

                    <label>
                        <strong>TYPE:</strong>
                    </label>
                    <input type="text"></input>

                    <label>
                        <strong>MESSAGE:</strong>
                    </label>
                    <textarea type="text"></textarea>

                    <button type="submit"> Submit </button>
                </form>
                </div>
        </div>
    )
}
export default ContactForm;