import DashboardLayout from "../../../../../components/layout/DashboardLayout"
import Information from "../../../../../components/dashboard/transaction/sales/information/SalesInformation"
import { connect,useDispatch } from "react-redux";
import { useState } from "react";

const SalesInformation = (props) =>{
    const [items, setItems] = useState([])
    const orders = props.orders
    const code = props.history.location.state.data.code
    let test = [""]
    for(let i = 0; i < props.orders.length; i++){
        if(props.orders[i].saleRef == code){
            test = props.orders[i]
            break;
        }
    }

    return(
    <DashboardLayout>
        <div onClick={()=>console.log(props.orders)}>tester</div>
        <Information data={props.history.location.state.data} orders={test}></Information>
    </DashboardLayout>
    )
}
const mapStateToProps = (state) => {
    return {
      orders: state.orders.orders
  };
}
export default connect(mapStateToProps, null)(SalesInformation);
