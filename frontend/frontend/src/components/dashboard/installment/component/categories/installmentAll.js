import Search from '@material-ui/icons/Search'
import DataGrid from '../../../../utilities/dataGrid/TableDataGrid'
import SearchBar from '../../../../utilities/SearchBar'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const installmentAll = (props) =>{
    return(
        <div>
            {/* <div className="sales-header" >Purchase Installment</div> */}
            <div className="searchbar-container">
            <SearchBar
                placeholder="Search"
            />
            </div>
            <NavLink to="/dashboard/installment/purchase/create"><button>Create</button></NavLink>
            {/* <button onClick={()=>console.log(props.data.installment)} >Create</button> */}
            {/* <button  onClick={testinven}>Create</button> */}

            <DataGrid columns={props.columns} rows={props.data} pageSize={5} ></DataGrid>  
            
        </div>
    )
}


export default installmentAll