import { useState,useEffect } from "react"
const CreatePurchaseForm = (props) =>{
  const [code,setCode] = new useState(props.data.code)
    const [supplier,setSupplier] = new useState(props.data.supplier)
    const [date,setDate] = new useState(props.data.date)
    const [notes,setNotes] = new useState(props.data.notes)
  
    const sendData=()=>{
      const data={
        code:code,
        supplier:supplier,
        date:date,
        notes:notes
      }
      
      props.onSetData(data)
    }
    return(
        <div className="purchase-create-form-container">
        <div className="form-left">
          <label>Code</label>
          <input 
          value={code} 
          onChange={(text)=>{setCode(text.target.value);sendData()}}
          disabled={props.editable?false:true}
          ></input>
          <label>Supplier</label>
          <input 
          value={supplier} 
          onChange={(text)=>{setSupplier(text.target.value);sendData()}}
          disabled={props.editable?false:true}></input>
         
        </div>
        <div className="form-right">
          <label>Date</label>
          <input 
          value={date} 
          onChange={(text)=>{setDate(text.target.value);sendData()}}
          disabled={props.editable?false:true}
          ></input>
          <label>Notes</label>
          <textarea 
          value={notes} 
          onChange={(text)=>{setNotes(text.target.value);sendData()}}
          disabled={props.editable?false:true}
          ></textarea>
        </div>
      </div>
    )
}

export default CreatePurchaseForm