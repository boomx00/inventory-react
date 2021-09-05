import Slideshow from './slideshow/Slideshow'
import Brands from './brands/Brands'
import ProductList from './productlist/ProductList'
import FeaturedProducts from './featuredproducts/FeaturedProducts'
import './First.css'
const First = () => {
    return(
        <div className="firstContainer">
            <div>
                <ProductList></ProductList>
                <Brands></Brands>
                <FeaturedProducts></FeaturedProducts>
            </div>
        </div>
    )
}

export default First;