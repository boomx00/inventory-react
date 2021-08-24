import './SupplierInformation.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateSupplierAction} from '../../../../redux/slices/supplierSlices'
const SupplierInformation = (props) =>{
    const dispatch = useDispatch()
    const [editable,setEditable] = useState(false)
    const [code,setCode] = useState(props.data.id)
    const [name,setName] = useState(props.data.name)
    const [telephone,setTelephone] = useState(props.data.telephone)
    const [address,setAddress] = useState(props.data.address)
    const [email,setEmail] = useState(props.data.email)
    const toggleEdit=(e)=>{
        e.preventDefault(); 
        setEditable(true)
    }

    const saveEdit=(e)=>{
        e.preventDefault();
        const data = {
            id:code,
            name:name,
            telephone:telephone,
            email:email,
            address:address
        }
        dispatch(updateSupplierAction(data))
        setEditable(false)

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
                <label>Code</label>
                <input type="text"
                value={code}
                onChange={(text)=>{setCode(text.target.value)}}
                disabled={editable?false:true}
                ></input>

                <label>Name</label>
                <input type="text"
                value={name}
                onChange={(text)=>{setName(text.target.value)}}
                disabled={editable?false:true}
                ></input>

                <label>Address</label>
                <input type="text"
                value={address}
                onChange={(text)=>{setAddress(text.target.value)}}
                disabled={editable?false:true}
                ></input>

            <label>Telephone</label>
                <input type="text"
                value={telephone}
                onChange={(text)=>{setTelephone(text.target.value)}}
                disabled={editable?false:true}
                ></input>

<label>Email</label>
                <input type="text"
                value={email}
                onChange={(text)=>{setEmail(text.target.value)}}
                disabled={editable?false:true}
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
export default SupplierInformation;