import React, { useState, useEffect, useCallback,useRef } from 'react'
import './ImageUploader.css'
const ImageUploader = (props) =>{
    const fileInput = useRef(null);
    let imageArray = []
    const [existingImage,setExistingImage] = useState(props.images)
    const[active,setActive] = useState(false);
    const[image, setImage] = useState(null);
    const[previewUrl, setPreviewUrl] = useState(props.images); 
    useEffect(() => {
       props.onSetImage(previewUrl)
    });
    const handleFile = file => {
        setImage(file);
        setPreviewUrl(file)
    }

    const getImage = (data) =>{
        // let url = URL.createObjectURL(data)
        // console.log(url)
        if(previewUrl.length == 0)
        {
            imageArray.push(data);
        setActive(true)
        handleFile(imageArray);
    }else{
        const array = [...previewUrl];
        console.log(array)
        array.push(data)
        handleFile(array);
        }
     

    }
    
    const handleOndragOver = event => {
        event.preventDefault();
    }
    const handleOnDrop = event => {
        //prevent the browser from opening the image
        event.preventDefault(); 
        event.stopPropagation(); 
        //let's grab the image file
        if(previewUrl.length == 0)
        {let imageFileLength = event.dataTransfer.files.length;
        for(var i = 0 ;i<imageFileLength;i++){
            imageArray.push(event.dataTransfer.files[i]);
        }
        setActive(true)
        handleFile(imageArray);
    }else{
        const array = [...previewUrl];
        let imageFileLength = event.dataTransfer.files.length;
        for(var i = 0 ;i<imageFileLength;i++){
            array.push(event.dataTransfer.files[i]);
        }
        handleFile(array);
        }
    }

    const testClicked= (index)=>{
        var array = [...previewUrl];
        array.splice(index, 1);

        // imageArray.splice(index,1);
        setPreviewUrl(array);
    }
    let btn_class = active ? "image-preview" : "";
    return(
        <div className="imageuploader-wrapper">
      {props.state=="view"?null: 
       <div 
          className="drop_zone"
          onDragOver = {handleOndragOver}
          onDrop = {handleOnDrop}
          onClick = { () => 
            fileInput.current.click()
            // console.log(existingImage)
        }
        > 
          <p >Click to select or Drag and drop image here....</p>
          <input 
           type="file" 
           accept='image/*' 
           ref={fileInput} hidden 
           onChange={e => getImage(e.target.files[0])}
          />
        </div>}
        <div className={active ? "image-preview" : ""}>
        {
        previewUrl  &&
            previewUrl.map((object, i) =>
            <div className="image-size"> 
                {props.state=="view"?null: <h2 className="image-x" onClick={()=>testClicked(i)}>X</h2>}
                <img src={URL.createObjectURL(object)} alt='image'/>
            </div>
            )
        }
        </div> 
   </div>
    )
}

export default ImageUploader;