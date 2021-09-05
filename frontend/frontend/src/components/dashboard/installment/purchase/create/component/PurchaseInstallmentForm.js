const PurchaseInstallmentForm = () =>{
    return(
        <div className="purchase-create-form-container">
        <div className="form-left">
          <label>Code</label>
          <input 
        //   value={code} 
        //   onChange={(text)=>{setCode(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></input>
          <label>Purchase Ref</label>
          <input>
          </input>
          <label>Supplier</label>
          <input 
        //   value={supplier} 
        //   onChange={(text)=>{setSupplier(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></input>
         
        </div>
        <div className="form-right">
          <label>Date</label>
          <input 
        //   value={date} 
        //   onChange={(text)=>{setDate(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></input>
          <label>Amount</label>
          <input></input>
          <label>Notes</label>
          <textarea 
        //   value={notes} 
        //   onChange={(text)=>{setNotes(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></textarea>
        </div>
      </div>
    )
}

export default PurchaseInstallmentForm