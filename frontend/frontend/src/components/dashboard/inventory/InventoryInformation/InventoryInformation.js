import './InventoryInformation.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateInventoryAction} from '../../../../redux/slices/inventorySlices'
const InventoryInformation = (props) =>{
    const dispatch = useDispatch()
    const [editable,setEditable] = useState(false)
    const [code,setCode] = useState(props.data.id)
    const [name,setName] = useState(props.data.name)
    const [price,setPrice] = useState(props.data.price)

    const toggleEdit=(e)=>{
        e.preventDefault(); 
        setEditable(true)
    }

    const saveEdit=(e)=>{
        e.preventDefault();
        const data = {
            id:code,
            name:name,
            price:price
        }
        dispatch(updateInventoryAction(data))
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

                <label>Price</label>
                <input type="text"
                value={price}
                onChange={(text)=>{setPrice(text.target.value)}}
                disabled={editable?false:true}
                ></input>

                <label>Supplier</label>
                <input type="text"></input>

                <label>Brand</label>
                <input type="text"></input>

                <label>Category</label>
                <input type="text"></input>
                
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
export default InventoryInformation;