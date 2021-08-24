import { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import ImageUploader from "../../../utilities/imageUploader/ImageUploader"
import {addSupplierAction} from "../../../../redux/slices/supplierSlices"
import './SupplierCreate.css'
const InventoryCreate = ()=>{
    const dispatch = useDispatch();

    const [code,setCode] = useState();
    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [telephone,setTelephone] = useState();
    const [email,setEmail] = useState()
 
    const newSupplier = (e)=>{
        e.preventDefault();
        const data = {
            code:code,
            name:name,
            address:address,
            telephone:telephone,
            email:email
        }

        dispatch(addSupplierAction(data))
    }
    return(
        <div className="create-supplier-container">
            <NavLink to="/dashboard/supplier"><h2>BACK</h2></NavLink>
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

                <label>Address</label>
                <input type="text"
                value={address}
                onChange={(text)=>{setAddress(text.target.value)}}
                ></input>

                <label>Telephone</label>
                <input type="text"
                value={telephone}
                onChange={(text)=>{setTelephone(text.target.value)}}
                ></input>

                <label>Email</label>
                <input
                type="text"
                value={email}
                onChange={(text)=>setEmail(text.target.value)}>
                
                </input>
                
                <ImageUploader></ImageUploader>
                
                <button onClick={newSupplier}>Create</button>
            </form>
            </div>
    )
}

export default InventoryCreate;