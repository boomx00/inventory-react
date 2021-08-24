import { useState,useEffect } from "react";

const SalesInformationForm = (props)=>{
    const [code,setCode] = useState(props.data.code);
    const [customer,setCustomer] = useState(props.data.customer);
    const [address,setAddress] = useState(props.data.address);
    const [date,setDate] = useState(props.data.date);
    const [notes,setNotes] = useState(props.data.notes)
    const [editable, setEditable] = useState(false);  

    return(
        <div className="sales-create-form-container">
        <div className="form-left">
          <label>Code</label>
          <input value={code} onChange={(text)=>setCode(text.target.value)} disabled={props.editable?false:true}></input>
          <label>Customer</label>
          <input value={customer} onChange={(text)=>setCustomer(text.target.value)} disabled={props.editable?false:true}></input>
          <label>Address</label>
          <input value={address} onChange={(text)=>setAddress(text.target.value)} disabled={props.editable?false:true}></input>
        </div>
        <div className="form-right">
          <label>Date </label>
          <input value={date} onChange={(text)=>setDate(text.target.value)} disabled={props.editable?false:true}></input>
          <label>Notes</label>
          <textarea value={notes} onChange={(text)=>setNotes(text.target.value)} disabled={props.editable?false:true}></textarea>
        </div>
      </div>
    )
}

export default SalesInformationForm