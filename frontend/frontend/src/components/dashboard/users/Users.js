import SearchBar from "../../utilities/SearchBar";
import { NavLink,useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import DataGrid from '../../utilities/dataGrid/TableDataGrid';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react'

import './Users.css'
const Supplier = (users)=>{
  let history = useHistory();
    const [filteredData,setFilteredData] = useState(users.users)
    const testfunc = (e) =>{
        e.preventDefault();
        console.log(users.users)
    }

    const redirect=(data)=>{
      const id = data.id
      history.push('/dashboard/users/view/'+id,{data:data})
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'username', headerName: 'Username', width: 170 },
        { field: 'password', headerName: 'Password', width: 170 },
        

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
            <h2 className="users-header">Users</h2>
            <div className="users-search-container">
            <SearchBar placeholder="Search"></SearchBar>
            </div>
            <NavLink to="/dashboard/users/create"><button>Create</button></NavLink>
            <DataGrid rows={filteredData} columns={columns}></DataGrid>
        </div>
    )
}


const mapStateToProps = (state) => ({
    users: state.auth.users,
  })
export default connect(mapStateToProps,null)(Supplier);