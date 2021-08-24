import {NavLink,useHistory} from 'react-router-dom'
import SearchBar from '../../../utilities/SearchBar'
import DataGrid from '../../../utilities/dataGrid/TableDataGrid'
import Button from '@material-ui/core/Button';

const PurchaseInstallment = ()=>{
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'code', headerName: 'Code', width: 170 },
        { field: 'customer', headerName: 'Customer', width: 170 },
        { field: 'total', headerName: 'Total', width: 170 },
        { field: 'toBePaid', headerName: 'To Be Paid', width: 170 },
        {field: 'status', headerName:'Status', width:170},
        { field: 'paid', headerName: 'Paid', width: 170 },
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
                //   onClick={()=>redirect(params.row)}
                >
                  Open
                </Button>
              </strong>
            ),
          }

    ]
    return(
        <div>
            <div className="sales-header" >Purchase Installment</div>
            <div className="searchbar-container">
            <SearchBar
                placeholder="Search"
            />
            </div>
            <NavLink to="/dashboard/installment/purchase/create"><button  >Create</button></NavLink>
            {/* <button  onClick={testinven}>Create</button> */}

            <DataGrid columns={columns} rows={[]} pageSize={5} ></DataGrid>  
            
        </div>
    )
}
export default PurchaseInstallment