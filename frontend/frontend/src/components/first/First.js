import Slideshow from './slideshow/Slideshow'
import Brands from './brands/Brands'
import './First.css'
const First = () => {
    return(
        <div className="firstContainer">
            <div>
                <Slideshow></Slideshow>
                <Brands></Brands>
            </div>
        </div>
    )
}

export default First;