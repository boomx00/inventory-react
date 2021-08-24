import SearchBar from "../../utilities/SearchBar";
import { NavLink,useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import DataGrid from '../../utilities/dataGrid/TableDataGrid';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react'

import './Supplier.css'
const Supplier = (supplier)=>{
  let history = useHistory();
    const [filteredData,setFilteredData] = useState(supplier.supplier)
    const testfunc = (e) =>{
        e.preventDefault();
        console.log(supplier)
    }

    const redirect=(data)=>{
      const id = data.id
      history.push('/dashboard/supplier/view/'+id,{data:data})
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'code', headerName: 'Code', width: 170 },
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'address', headerName: 'Address', width: 170 },
        { field: 'telephone', headerName: 'Telephone', width: 170 },

        {
          field: 'button',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => (
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={()=>redirect(params.row)}
              >
                Open
              </Button>
            </strong>
          ),
        }

      ];
    return(
        <div>
            <h2 className="supplier-header">Supplier</h2>
            <div className="supplier-search-container">
            <SearchBar placeholder="Search"></SearchBar>
            </div>
            <NavLink to="/dashboard/supplier/create"><button>Create</button></NavLink>
            <DataGrid rows={filteredData} columns={columns}></DataGrid>
        </div>
    )
}


const mapStateToProps = (state) => ({
    supplier: state.supplier.supplier,
  })
export default connect(mapStateToProps,null)(Supplier);