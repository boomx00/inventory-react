const CategoryImage = (props) =>{
    return(
            <div className={'mainpage-categories-item'}>
                <img  src={props.image}></img>
                <p className={'category-label'}>{props.category}</p>
            </div>
    )
}
export default CategoryImage