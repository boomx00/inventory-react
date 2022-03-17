import PurchaseInstallmentForm from "../create/component/PurchaseInstallmentForm"
import PurchaseInstallmentTable from "../create/component/PurchaseInstallmentTable"
import AddPaymentModal from "../../component/AddPaymentModal"
import ConfirmBar from "../component/confirmBar"
import { useState } from "react"
import { connect } from "react-redux"
const PurchaseInstallmentInformation = (props)=>{
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
    const xx = (data)=>{
        console.log(date)
        setModalData(data)
    }
    return(
        <div>
            {/* <div onClick={()=>{console.log(x)}}>aa</div> */}
            {status=="paid"?<ConfirmBar days={props.data} status={status} purchaseRef={purchaseRef}></ConfirmBar>:null}
            <PurchaseInstallmentForm  status={status} days={days} purchaseRef={purchaseRef} supplier={supplier} amount={amount} paid={x}></PurchaseInstallmentForm>
            <PurchaseInstallmentTable onSetDate={setDate} onSetModalState={setModalState} onToggleModal={setModalShow} payment={props.payment} onSetModalData={xx} amount={amount} paid={x}></PurchaseInstallmentTable>
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