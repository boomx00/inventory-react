import Sanitary from '../../../../images/categories/sanitary.jpg'
import Floor from '../../../../images/categories/floor.jpg'
import Wall from '../../../../images/categories/wall.jpg'
import Tools from '../../../../images/categories/tools.jpg'
import WaterHeater from '../../../../images/categories/solahart.png'
import Door from '../../../../images/categories/door.jpg'

import CategoryImage from './CategoryImage'
const ProductCategories = ()=>{
    const categories = [
        {
          id:'1',
          image: Sanitary,
          category: "Sanitary"
        },
        {
          id:'2',
          image: Floor,
          category: "Floor"

        },
        {
          id:'3',
          image: Wall,
          category: "Wall"

        },
        {
          id:'3',
          image: Tools,
          category: "Tools"

        },
        {
          id:'3',
          image: WaterHeater,
          category: "Water Heater"

        },
        {
          id:'3',
          image: Door,
          category: "Door"

        }
      ]
    return(
        <div className={'mainpage-categories-wrap'}>
            {categories.map((images)=>(
                <CategoryImage image={images.image} category={images.category}></CategoryImage>
            ))}
        </div>
    )
}

export default ProductCategories