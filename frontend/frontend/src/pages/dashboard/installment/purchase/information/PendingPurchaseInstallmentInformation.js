import DashboardLayout from "../../../../../components/layout/DashboardLayout"
import PendingPurchaseInstallmentInformations from "../../../../../components/dashboard/installment/purchase/information/PendingPurchaseInstallmentInformation"
import { connect } from "react-redux"
import { useState } from "react"
const PendingPurchaseInstallmentInformation = (props)=>{
    const [purchaseRef, setPurchaseRef] = new useState(props.history.location.state.data.purchaseRef)
    const paymentData=[]
    let orderData=[]
    props.pendingInstallment.forEach(function(payment){
        if(payment.purchaseRef == props.history.location.state.data.purchaseRef){
            paymentData.push(payment)
        }
    })

    props.purchaseOrder.forEach(function(order){
        if(order.code==props.history.location.state.data.purchaseRef){
            orderData=order.products
        }
    })
    
    return(
        <DashboardLayout>
            {/* <h1 onClick={()=>{console.log(paymentData)}}>aaabaa</h1> */}
            <PendingPurchaseInstallmentInformations data={props.history.location.state.data} order={orderData}></PendingPurchaseInstallmentInformations>
        </DashboardLayout>
    )
}
const mapStateToProps=(state)=>{
    return{
        pendingInstallment: state.installmentPending.installmentPending,
        purchaseOrder: state.purchaseOrder.purchaseOrder
    }
}
export default connect(mapStateToProps,null)(PendingPurchaseInstallmentInformation)