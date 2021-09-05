import "./Brands.css";
 
const BrandImage =(props)=>{
    function test(){
        props.entered(props.id)
    }
    return(
        
            props.selected==false?
        <div className="brands-images" onMouseEnter={test}>
            {/* <img className="product-image" src={props.image}></img> */}
            <img className="logo-image" src={props.logo}></img>
        </div>:
        <div className="brands-images selected" onMouseEnter={test}>
            {/* <img className="product-image" src={props.image}></img> */}
            <img className="logo-image" src={props.logo}></img>
        </div>
        
    )
}
export default BrandImage;
