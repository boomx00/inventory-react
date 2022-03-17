
const PurchaseInstallmentTable = (props)=>{
    let counter =0
    const openPaymentModal=(data)=>{
        // console.log(data)
        props.onSetModalData(data)
        props.onSetModalState("view")
        props.onToggleModal(true)
        props.onSetDate(data.date)
    }

    const createPaymentModal=(data)=>{
        props.onToggleModal(true)
        props.onSetModalData(null)
        props.onSetModalState("create")
    }
    return(
        <div className="products-container">
            <h2>Payment History</h2>
            <div className="add-product">
                {parseInt(props.amount)-parseInt(props.paid)<=0?null:<button 
          onClick={() => createPaymentModal()}
          >Add</button>}
            
            </div>
            <table>
                <tr>
                    <td>No</td>
                    <td>Date</td>
                    <td>Detail</td>
                    <td>Credit</td>
                    <td>Debit</td>
                    <td>Action</td>
                </tr>
               { props.payment.map((payments)=>(
                    payments.type=="credit"?
                    <tr>
                        <td>{(counter += 1)}</td>
                        <td>{payments.date}</td>
                        <td>Accounts Payable</td>
                        <td>{payments.amount}</td>
                        <td></td>
                        <td></td>

                    </tr>:null
                ))}
                {
                    props.payment.map((payments)=>(
                        payments.type=="debit"?
                        <tr>
                            <td>{(counter += 1)}</td>
                            <td>{payments.date}</td>
                            <td>Accounts Payed</td>
                            <td></td>
                            <td>{payments.amount}</td>
                            <td>
                                <button
                                 onClick={() => 
                                    // props.onToggleModal(true)
                                    openPaymentModal(payments)
                                }
                                >open</button>
                            </td>

                        </tr>
                        :
                       null
                    ))
                }
                <tr>
                    <td colSpan="5">To Be Paid</td>
                    <td>
                        {parseInt(props.amount)-parseInt(props.paid)}
                        </td>
                </tr>
            </table>
        </div>
    )
}
export default PurchaseInstallmentTable