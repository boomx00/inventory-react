import DashboardLayout from '../../../../components/layout/DashboardLayout'
import DashboardInventory from '../../../../components/dashboard/inventory/Inventory'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import { NavLink } from "react-router-dom";
import InstallmentPurchase from '../../../../components/dashboard/installment/purchase/PurchaseInstallment';
import { connect, useDispatch } from 'react-redux'
import {addInventoryAction} from '../../../../redux/slices/inventorySlices'

const PurchaseInstallment = (inventory)=>{
  const dispatch = useDispatch()
  const [newRow,setRows]= useState(inventory.inventory);

   
      
      const testfunction=()=>{
        const data ={id:10,name:'Jamet',age:50}
        dispatch(addInventoryAction(data))
      }
    return(
        <DashboardLayout>
            <InstallmentPurchase></InstallmentPurchase>
        </DashboardLayout>
    )

}
const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory,
})
export default connect(mapStateToProps, null)(PurchaseInstallment)
