
const PurchaseInstallmentTable = (props)=>{
    return(
        <div className="products-container">
            <h2>Payment History</h2>
            <div className="add-product">
            <button 
        //   hidden={props.editable?false: edit?false:true}
          onClick={() => props.onToggleModal(true)}
          >Add</button>
            </div>
            <table>
                <tr>
                    <td>No</td>
                    <td>Date</td>
                    <td>Supplier</td>
                    <td>Amount</td>
                    <td>Detail</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>25/10/2020</td>
                    <td>Accounts Payable</td>
                    <td>50.000</td>
                    <td></td>
                    <td>delete</td>
                </tr>
            </table>
        </div>
    )
}
export default PurchaseInstallmentTable