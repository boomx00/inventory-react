import ProductCategories from './productCategories/ProductCategories'
import './ProductList.css'
const ProductList = () =>{
    return(
        <div className={"mainpage-productlist"}>
            <h2 className={"pl-header"}>Star Shopping!</h2>
            <div className={"mainpage-categories"}>
                <ProductCategories></ProductCategories>
            </div>
        </div>
    )
}
export default ProductList