import './confirmBar.css'
import {NavLink,useHistory} from 'react-router-dom'

import { confirmInstallmentAction,RemoveInstallmentAction } from '../../../../../redux/slices/installmentSlices'
import { useDispatch } from "react-redux";
const confirmBar=(props)=>{
    const dispatch = new useDispatch()
    const confirmInstallment=()=>{
        // console.log(props.status)
        dispatch(confirmInstallmentAction(props.purchaseRef))
    }

    const removeInstallment=()=>{
        dispatch(RemoveInstallmentAction(props.purchaseRef))
    }
    return(
        <div className="mm">
            {/* <h1 className="mm">conficrm</h1> */}
            <button className="confirmButton" onClick={confirmInstallment}>Confirm</button>
            {/* <NavLink to="/dashboard/installment/purchase"><button className="removeButton" onClick={removeInstallment}>Remove</button></NavLink> */}
        </div>
    )
}
export default confirmBar