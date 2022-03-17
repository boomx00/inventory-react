const PurchaseInstallmentForm = (props) =>{
    return(
        <div className="purchase-create-form-container">
        <div className="form-left">
        
          <label>Purchase Ref</label>
          <input
          disabled={true}

          value={props.purchaseRef} >
          </input>
          <label>Supplier</label>
          <input 
          disabled={true}

          value={props.supplier} 
        //   onChange={(text)=>{setSupplier(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></input>
          <label>Status (Days)</label>
         <div className="installment-status-container">
         <select
         className="purchase-select"
         onChange={(e)=>props.onSetStatus(e.target.value)}
         disabled={props.editable?false:true}

         >
           <option value="paid" selected={props.status && props.status == "paid"?"selected":null}>Paid</option>
           <option value="unpaid" selected={props.status && props.status == "unpaid"?"selected":null}>Unpaid</option>

           </select>

            {
              props.status=="unpaid"?
              <input
              disabled={props.editable?false:true}
 
              value={props.days?props.days:null}
              className="status-input" 
              type="number"
              onChange={(e)=>props.onSetDays(e.target.value)}
              ></input>

             :
null
}
              
            </div>
          <label>Notes</label>
          <textarea 
          disabled={true}
        //   value={notes} 
        //   onChange={(text)=>{setNotes(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></textarea>
        </div>
        <div className="form-right">
          <label>Date</label>
          <input 
          disabled={true}
        //   value={date} 
        //   onChange={(text)=>{setDate(text.target.value);sendData()}}
        //   disabled={props.editable?false:true}
          ></input>
          <label>Amount</label>
          <input
          disabled={true}
            value={props.amount}
          ></input>
         <label>Paid</label>
          <input
          disabled={true}
            value={props.paid}
          ></input>
        </div>
      </div>
    )
}

export default PurchaseInstallmentForm