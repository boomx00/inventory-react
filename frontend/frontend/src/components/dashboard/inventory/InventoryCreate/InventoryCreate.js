import { useState } from "react";
import { useDispatch } from 'react-redux';

import ImageUploader from "../../../utilities/imageUploader/ImageUploader"
import {addInventoryAction} from "../../../../redux/slices/inventorySlices"
const InventoryCreate = ()=>{
    const dispatch = useDispatch();

    const [code,setCode] = useState();
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [supplier,setSupplier] = useState();
    const [brand,setBrand] = useState();
    const [stock,setStock] = useState(0);
    const [category,setCategory] = useState();
    const newInventory = (e)=>{
        e.preventDefault();
        const data = {
            code:code,
            name:name,
            price:price,
            supplier:supplier,
            brand:brand,
            stock:stock,
            category:category
        }

        dispatch(addInventoryAction(data))
    }
    return(
        <div className="create-inventory-container">
            <form>
                <label>Code</label>
                <input type="text"
                value={code}
                onChange={(text)=>{setCode(text.target.value)}}
                ></input>

                <label>Name</label>
                <input type="text"
                value={name}
                onChange={(text)=>{setName(text.target.value)}}
                ></input>

                <label>Price</label>
                <input type="text"
                value={price}
                onChange={(text)=>{setPrice(text.target.value)}}
                ></input>

                <label>Supplier</label>
                <input type="text"
                value={supplier}
                onChange={(text)=>{setSupplier(text.target.value)}}
                ></input>

                <label>Brand</label>
                <input type="text"
                value={brand}
                onChange={(text)=>{setBrand(text.target.value)}}
                ></input>

                <label>Category</label>
                <input type="text"
                value={category}
                onChange={(text)=>{setCategory(text.target.value)}}
                ></input>
                <ImageUploader onSetImage={()=>console.log('aa')}></ImageUploader>
                
                <button onClick={newInventory}>Create</button>
            </form>
            </div>
    )
}

export default InventoryCreate;