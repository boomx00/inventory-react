import React, { useState, useEffect, useCallback } from 'react'

import "./Brands.css";
import solahartlogo from "../../../images/solahart-logo.png";
import solahartproduct from "../../../images/solahart-product.png";
import mpoinlogo from "../../../images/mpoin-logo.png";
import mpoinproduct from "../../../images/mpoin-product.jpg";
import rifenglogo from "../../../images/rifeng-logo.png";
import rifengproduct from "../../../images/rifeng-product.png";
import BrandImage from "./BrandImage"
const Brands = () => {
  const [selected, setSelected] = useState();

  const image_data = [
    {
      id:'1',
      image: solahartproduct,
      logo: solahartlogo
    },
    {
      id:'2',
      image: mpoinproduct,
      logo: mpoinlogo
    },
    {
      id:'3',
      image: rifengproduct,
      logo: rifenglogo
    }
  ]
  let out = ""
  function MouseLeave(e){
    e.target.style.opacity=0.5;
    console.log(e.target.id)

  }
  function Entered(id){
    setSelected(id)
  }
  return (
    <div className="brands-container">
      <hr></hr>

      <h2>Official Agents</h2>
      <div className="brands-images-container" >
        {image_data.map((images)=>(
            selected==null?
          <BrandImage entered={Entered} selected={false} id={images.id} image={images.image} logo={images.logo}></BrandImage>
            :
             selected==images.id?
             <BrandImage entered={Entered} selected={true} id={images.id} image={images.image} logo={images.logo}></BrandImage>
             :
             <BrandImage entered={Entered} selected={false} id={images.id} image={images.image} logo={images.logo}></BrandImage>
        ))

}
      </div>
    </div>
  );
};

export default Brands;
