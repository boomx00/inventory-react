import PurchaseInstallmentForm from "./component/PurchaseInstallmentForm"
import PurchaseInstallmentTable from "./component/PurchaseInstallmentTable"
import AddPaymentModal from "../../component/AddPaymentModal"
import { useState } from "react"
const PurchaseInstallmentCreate = ()=>{
    const [modalShow,setModalShow] = new useState(false)
    return(
        <div>
            <PurchaseInstallmentForm ></PurchaseInstallmentForm>
            <PurchaseInstallmentTable onToggleModal={setModalShow} payment={[]}></PurchaseInstallmentTable>
            <AddPaymentModal show={modalShow} onHide={()=>setModalShow(false)}></AddPaymentModal>
        </div>
    )
}
export default PurchaseInstallmentCreate