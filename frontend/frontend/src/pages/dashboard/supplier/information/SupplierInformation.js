import { connect, useDispatch } from 'react-redux'
import { NavLink,useHistory } from "react-router-dom";
import React, { useState, useFocusEffect } from 'react'
import DashboardLayout from '../../../../components/layout/DashboardLayout';
import InformationContainer from '../../../../components/dashboard/supplier/SupplierInformation/SupplierInformation'
const SupplierInformation = (props) =>{
    const testfunct = ()=>{
        console.log(props.history.location.state.data)
    }
    return(
        
        <DashboardLayout>
          <NavLink to="/dashboard/supplier"><h2 onClick={testfunct}>Back</h2></NavLink>   
          <InformationContainer data={props.history.location.state.data}></InformationContainer> 
        </DashboardLayout>
    )
}

const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory,
})
export default connect(mapStateToProps,null)(SupplierInformation);