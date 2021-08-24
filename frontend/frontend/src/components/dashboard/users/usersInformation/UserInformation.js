import './UserInformation.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {editUserAction} from '../../../../redux/slices/authSlices'
const UserInformation = (props) =>{
    const dispatch = useDispatch()
    const [editable,setEditable] = useState(false)
    const [code,setCode] = useState(props.data.id);
    const [username,setUsername] = useState(props.data.username);
    const [password,setPassword] = useState(props.data.password);
    const [telephone,setTelephone] = useState();
    const [email,setEmail] = useState()
    const toggleEdit=(e)=>{
        e.preventDefault(); 
        setEditable(true)
    }

    const saveEdit=(e)=>{
        e.preventDefault();
        const data = {
            id:code,
            username:username,
            password:password,
        }
        dispatch(editUserAction(data))
        // dispatch(updateSupplierAction(data))
        // setEditable(false)

    }
    
    const testfunc = (e)=>{
        e.preventDefault(); 
        
    }
    const changeFunc=(e)=>{
        setCode(e.target.value)
    }
    return(
        <div className={"information-container"+ ' ' +"another"}>
            <form>
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
                
                <div className="button-container">
                <button onClick={toggleEdit}
                hidden={editable?true:false}

                >Edit</button>
                <button
                hidden={editable?false:true}
                onClick={saveEdit}
                >Save</button>
                </div>
            </form>
        </div>
    )
}
export default UserInformation;