import { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import ImageUploader from "../../../utilities/imageUploader/ImageUploader"
import {addUserAction} from "../../../../redux/slices/authSlices"
import './UsersCreate.css'
const UsersCreate = ()=>{
    const dispatch = useDispatch();

    const [code,setCode] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [telephone,setTelephone] = useState();
    const [email,setEmail] = useState()
 
    const newSupplier = (e)=>{
        e.preventDefault();
        const data = {
            username:username,
            password:password,
        }
        dispatch(addUserAction(data))
    }
    return(
        <div className="create-supplier-container">
            <NavLink to="/dashboard/users"><h2>BACK</h2></NavLink>
            <form>
                {/* <label>Code</label>
                <input type="text"
                value={code}
                onChange={(text)=>{setCode(text.target.value)}}
                ></input> */}

                <label>Username</label>
                <input type="text"
                value={username}
                onChange={(text)=>{setUsername(text.target.value)}}
                ></input>

                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(text)=>{setPassword(text.target.value)}}
                ></input>

               
                
                <button onClick={newSupplier}>Create</button>
            </form>
            </div>
    )
}

export default UsersCreate;