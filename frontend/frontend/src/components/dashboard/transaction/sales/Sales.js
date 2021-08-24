import SearchBar from "../../../utilities/SearchBar";
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { connect } from "react-redux";
import {NavLink,useHistory} from 'react-router-dom'
import DataGrid from '../../../utilities/dataGrid/TableDataGrid'
import './Sales.css'
const Sales = (sales) =>{
  let history = useHistory();
    const [filteredData,setFilteredData] = useState(sales.sales)
    const func = () =>{
        console.log(sales.sales)
    }
    const redirect=(data)=>{
      const id = data.id
      history.push('/dashboard/sales/view/'+id,{data:data})
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'code', headerName: 'Code', width: 170 },
        { field: 'date', headerName: 'Date', width: 170 },
        { field: 'customer', headerName: 'Customer', width: 170 },
        { field: 'cashier', headerName: 'Cashier', width: 170 },
        { field: 'total', headerName: 'Total', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
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

    ]
    return(
        <div>
            <div className="sales-header" onClick={func}>Sales</div>
            <div className="searchbar-container">
            <SearchBar
                placeholder="Search"
            />
            </div>
            <NavLink to="/dashboard/sales/create"><button  >Create</button></NavLink>
            {/* <button  onClick={testinven}>Create</button> */}

            <DataGrid columns={columns} rows={filteredData} pageSize={5} ></DataGrid>  
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        sales:state.sales.sales
    }
}
export default connect(mapStateToProps,null)(Sales)