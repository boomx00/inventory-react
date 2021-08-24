const CreateSalesForm=(props)=>{
    return(
        <div className="sales-create-form-container">
        <div className="form-left">
          <label>Code</label>
          <input value={props.data.code} onChange={(text)=>props.onSetCode(text.target.value)}></input>
          <label>Customer</label>
          <input value={props.data.customer} onChange={(text)=>props.onSetCustomer(text.target.value)}></input>
          <label>Address</label>
          <input value={props.data.address} onChange={(text)=>props.onSetAddress(text.target.value)}></input>
        </div>
        <div className="form-right">
          <label>Date</label>
          <input value={props.data.date} onChange={(text)=>props.onSetDate(text.target.value)}></input>
          <label>Notes</label>
          <textarea value={props.data.notes} onChange={(text)=>props.onSetNotes(text.target.value)}></textarea>
        </div>
      </div>
    )
}
export default CreateSalesForm