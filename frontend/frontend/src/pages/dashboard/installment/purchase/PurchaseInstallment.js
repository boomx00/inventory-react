import DashboardLayout from '../../../../components/layout/DashboardLayout'
import DashboardInventory from '../../../../components/dashboard/inventory/Inventory'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import { NavLink } from "react-router-dom";
import InstallmentPurchase from '../../../../components/dashboard/installment/purchase/PurchaseInstallment';
import { connect, useDispatch } from 'react-redux'
import {addInventoryAction} from '../../../../redux/slices/inventorySlices'

const PurchaseInstallment = (props)=>{
  const dispatch = useDispatch()

    return(
        <DashboardLayout>
          <div onClick={()=>{console.log(props.installmentPending)}}>a</div>
            <InstallmentPurchase data={props.installment} pending={props.installmentPending}> </InstallmentPurchase>
        </DashboardLayout>
    )

}
const mapStateToProps = (state) => ({
  installment: state.installment,
  installmentPending: state.installmentPending
})
export default connect(mapStateToProps, null)(PurchaseInstallment)
