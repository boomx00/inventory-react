import './Inventory.css'
import SearchBar from "../../utilities/SearchBar";
import DataGrid from '../../utilities/dataGrid/TableDataGrid';
import { connect, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { NavLink,useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const Inventory = (inventory) =>{
  let history = useHistory();
    const testinven=()=>{
      console.log(inventory.inventory)
    }
    const [filteredData,setFilteredData] = useState(inventory.inventory);
    
    const redirect = (data) => {
      const id = data.id
      history.push('/dashboard/inventory/view/'+id,{data:data})
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'code', headerName: 'Code', width: 170 },
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'stock', headerName: 'Stock', width: 170,
        renderCell:(params)=>(
          params.row.stock<0? <p>0</p>:<p>{params.row.stock}</p>
        )
      },
        { field: 'price', headerName: 'Price', width: 170 },

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
                onClick={()=>console.log(params.row)}
              >
                Open
              </Button>
            </strong>
          ),
        }

      ];
      const inputData = (data)=>{
          setFilteredData(data)
      }
    return(
        <div>
            <div className="inventory-header"><h2>Inventory</h2></div>
            <div className="inventory-search-container">
                
            <SearchBar
                placeholder="Search"
                data = {inventory}
                onInputData={inputData}
            />
            
            </div>
            <NavLink to="/dashboard/inventory/create"><button  onClick={testinven}>Create</button></NavLink>
            {/* <button  onClick={testinven}>Create</button> */}

            <DataGrid columns={columns} rows={filteredData} pageSize={5} ></DataGrid>           
        </div>
    )
}

const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory
})
export default connect(mapStateToProps,null)(Inventory);