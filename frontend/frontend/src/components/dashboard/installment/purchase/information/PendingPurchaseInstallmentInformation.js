import PurchaseInstallmentForm from "../create/component/PurchaseInstallmentForm"
import PurchaseInstallmentTable from "../create/component/PurchaseInstallmentTable"
import AddPaymentModal from "../../component/AddPaymentModal"
import CreateBar from "./component/createBar"
import ConfirmBar from "../component/confirmBar"
import OrderData from "./component/orderData"
import { useState } from "react"
import { connect } from "react-redux"
import { createInstallmentAction } from "../../../../../redux/slices/installmentSlices"
import { removeInstallmentPendingAction } from "../../../../../redux/slices/installmentPendingSlices"
import { updatePurchaseInstallmentAction } from "../../../../../redux/slices/purchaseSlices"
import { useDispatch } from "react-redux"
const PurchaseInstallmentInformation = (props)=>{
    const dispatch = new useDispatch()
    let x = 0;
    const [modalShow,setModalShow] = new useState(false)
    const [modalData,setModalData] = new useState({date:null})
    const [purchaseRef, setPurchaseRef] = new useState(props.data.purchaseRef)
    const [supplier,setSupplier] = new useState(props.data.supplier)
    const [amount, setAmount] = new useState(props.data.amount)
    const [status, setStatus] = new useState(props.data.status)
    const [days, setDays] = new useState(props.data.days)
    const [modalState, setModalState] = new useState()
    const [date, setDate] = new useState()
    props.installmentPayment.installmentPayment.forEach(payment => {
        if(payment.type=="debit" && payment.purchaseRef == purchaseRef){
            x+=parseInt(payment.amount)
        }
    });
    const onModalHide=()=>{
        setModalShow(false);
    }
    const createInstallment=()=>{
        const data = {...props.data, pending:true}
        console.log(props.data)
        dispatch(createInstallmentAction(data))
        dispatch(removeInstallmentPendingAction(purchaseRef))
        dispatch(updatePurchaseInstallmentAction(purchaseRef))
    }
    return(
        <div>
            {/* <div onClick={()=>{console.log(props.order)}}>asa</div> */}
            <CreateBar onCreateInstallment={createInstallment}></CreateBar>
            <PurchaseInstallmentForm  status={status} days={days} purchaseRef={purchaseRef} supplier={supplier} amount={amount} paid={x}></PurchaseInstallmentForm>
            <OrderData data={props.order}></OrderData>
            {/* <PurchaseInstallmentTable onSetDate={setDate} onSetModalState={setModalState} onToggleModal={setModalShow} payment={props.payment} onSetModalData={xx} amount={amount} paid={x}></PurchaseInstallmentTable> */}
            <AddPaymentModal onSetStatus={setStatus} total={amount} paid={x} date={date} state={modalState} onSetModalState={setModalState} data={modalData} show={modalShow} setShow={setModalShow} onHide={onModalHide} purchaseRef={purchaseRef}></AddPaymentModal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      installmentPayment: state.installmentPayment,

  };
}
export default connect(mapStateToProps,null)(PurchaseInstallmentInformation) 