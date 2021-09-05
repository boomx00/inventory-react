import Products from './products/Products'

const FeaturedProducts = ()=>{
    return(
        <div>
            <h2>
                Featured Products
            </h2>
            <div className="featured-products-wrap">
                <Products></Products>
            </div>
        </div>
    )
}   

export default FeaturedProducts