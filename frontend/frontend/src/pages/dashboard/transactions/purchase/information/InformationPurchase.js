import DashboardLayout from "../../../../../components/layout/DashboardLayout";
import PurchaseInformation from "../../../../../components/dashboard/transaction/purchase/information/purchaseInformation"
import { connect,useDispatch } from "react-redux";

const InformationPurchase = (props)=>{
    let test = [""]
    const code = props.history.location.state.data.code

    for(let i = 0; i < props.orders.length; i++){
        if(props.orders[i].code == code){
            test = props.orders[i]
            break;
        }
    }
    return(
        <DashboardLayout>
            <div onClick={()=>console.log(props.location.state.data.status)}>a</div>
            <PurchaseInformation data={props.location.state.data} status={props.location.state.data.status} days={props.location.state.data.days} orders={test}></PurchaseInformation>
        </DashboardLayout>
        )
}

const mapStateToProps = (state) => {
    return {
      orders: state.purchaseOrder.purchaseOrder
  };
}
export default connect(mapStateToProps, null)(InformationPurchase);
