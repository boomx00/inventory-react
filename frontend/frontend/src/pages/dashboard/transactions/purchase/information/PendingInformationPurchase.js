import DashboardLayout from "../../../../../components/layout/DashboardLayout";
import PendingPurchaseInformation from "../../../../../components/dashboard/transaction/purchase/information/pendingPurchaseInformation"
import { connect,useDispatch } from "react-redux";

const PendingInformationPurchase = (props)=>{
    let test = []
    let products = []
    const saleRef = props.history.location.state.data.saleRef

    for(let i = 0; i < props.pendingPurchaseOrder.length; i++){
        if(props.pendingPurchaseOrder[i].saleRef == saleRef){
            test = props.pendingPurchaseOrder[i].products
            for(let j = 0; j < props.pendingPurchaseOrder[i].products.length;j++){
                let product = props.products.findIndex(product=>product.code == props.pendingPurchaseOrder[i].products[j].code)
                products = [props.pendingPurchaseOrder[product],...products]
            }
            break;
        }
    }
    return(
        <DashboardLayout>
            <div onClick={()=>console.log(products)}>a</div>
            <PendingPurchaseInformation data={props.location.state.data} orders={test} product={test}></PendingPurchaseInformation>
        </DashboardLayout>
        )
}

const mapStateToProps = (state) => {
    return {
        pendingPurchaseOrder: state.pendingPurchaseOrder.pendingPurchaseOrders,
        products: state.inventory.inventory

  };
}
export default connect(mapStateToProps, null)(PendingInformationPurchase);
