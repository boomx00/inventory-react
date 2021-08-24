import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import solahartbanner from '../../../images/solahart-banner.jpg'
import mpoinbanner from '../../../images/mpoin-banner.jpg'
import './Slideshow.css'
const Slideshow =()=>{
    return(
      <div className="image-containers">
        <Carousel className="image-container">
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={solahartbanner}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mpoinbanner}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
</div>
    )
}
export default Slideshow;