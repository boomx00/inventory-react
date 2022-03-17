import DashboardLayout from "../../../../../components/layout/DashboardLayout"
import InformationPurchaseInstallment from "../../../../../components/dashboard/installment/purchase/information/PurchaseInstallmentInformation"
import { connect } from "react-redux"
import { useState } from "react"
const PurchaseInstallmentInformation = (props)=>{
    const [purchaseRef, setPurchaseRef] = new useState(props.history.location.state.data.purchaseRef)
    const paymentData=[]
    props.installmentPayments.forEach(function(payment){
        if(payment.purchaseRef == props.history.location.state.data.purchaseRef){
            paymentData.push(payment)
        }
    })
    
    return(
        <DashboardLayout>
            {/* <h1 onClick={()=>{console.log(paymentData)}}>aaabaa</h1> */}
            <InformationPurchaseInstallment data={props.history.location.state.data} payment={paymentData}></InformationPurchaseInstallment>
        </DashboardLayout>
    )
}
const mapStateToProps=(state)=>{
    return{
        installmentPayments: state.installmentPayment.installmentPayment
    }
}
export default connect(mapStateToProps,null)(PurchaseInstallmentInformation)