import { useState,useEffect } from "react"
import '../CreatePurchase.css'
const CreatePurchaseForm = (props) =>{
  const [code,setCode] = new useState(props.data.code)
    const [supplier,setSupplier] = new useState(props.data.supplier)
    const [date,setDate] = new useState(props.data.date)
    const [notes,setNotes] = new useState(props.data.notes)
    const [saleRef,setSaleRef] = new useState(props.data.saleRef)
    const [days, setDays] = new useState(props.data.days)
    const sendData=()=>{
      const data={
        code:code,
        supplier:supplier,
        date:date,
        notes:notes,
      }
      props.onSetData(data)
    }
    return(
        <div className="purchase-create-form-container">
          {/* <div onClick={()=>{console.log(props)}}>asdfasdf</div> */}
        <div className="form-left">
        <label>Code</label>
          <input 
          value={code} 
          onChange={(text)=>{props.onSetCode(text.target.value)}}
          disabled={props.editable?false:true}
          ></input>
        <label>Sales Reference</label>
          <input 
          value={saleRef} 
          onChange={(text)=>{props.onSetSaleRef(text.target.value)}}
          disabled={props.editable?false:true}></input>
      
          <label>Supplier</label>
          <input 
          value={supplier} 
          onChange={(text)=>{props.onSetSupplier(text.target.value)}}
          disabled={props.editable?false:true}></input>
         <div className="status-wrapper">

         <div className="purchase-status-container">
         <label>Status (Days)</label>
      <div className="xs">
        <div>
         <select
         className="purchase-select"
         onChange={(e)=>props.onSetStatus(e.target.value)}
         disabled={props.editable?false:true}

         >
           <option value="paid" selected={props.status && props.status == "paid"?"selected":null}>Paid</option>
           <option value="unpaid" selected={props.status && props.status == "unpaid"?"selected":null}>Unpaid</option>

           </select>
           </div>
           <div>
           {
              props.status=="unpaid"?
              <div>
              <input
              disabled={props.editable?false:true}
 
              value={props.days?props.days:null}
              className="status-input" 
              type="number"
              onChange={(e)=>props.onSetDays(e.target.value)}
              ></input>
              </div>
             :
<div></div>
}
              </div>
              </div>
            </div>
            <div className="transaction-status-container">
         <label>Transaction Status</label>
          <h3>{props.status=="paid"?"Paid":"Unpaid"}</h3>
        
              
            </div>
           </div>{/* for status wrapper */}
           
        </div>
        <div className="form-right">
          <label>Date</label>
          <input 
          value={date} 
          onChange={(text)=>{props.onSetDate(text.target.value)}}
          disabled={props.editable?false:true}
          ></input>
          <label>Notes</label>
          <textarea 
          value={notes} 
          onChange={(text)=>{props.onSetNotes(text.target.value)}}
          disabled={props.editable?false:true}
          ></textarea>
        </div>
      </div>
    )
}

export default CreatePurchaseForm