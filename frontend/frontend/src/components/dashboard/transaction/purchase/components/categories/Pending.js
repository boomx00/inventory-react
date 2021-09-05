import Search from '@material-ui/icons/Search'
import DataGrid from '../../../../../utilities/dataGrid/TableDataGrid'
import SearchBar from '../../../../../utilities/SearchBar'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './categories.css'
const Pending = (props) =>{
    return(
        <div>
            <div className="searchbar-container">
            <SearchBar></SearchBar>
            </div>
            {/* <button onClick={()=>console.log(props.purchases)}>Create</button> */}
            <NavLink to='/dashboard/purchase/create'
            ><button>Create</button></NavLink>

            <DataGrid columns={props.columns} rows={props.pendingPurchase} pageSize={5}></DataGrid>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        pendingPurchase:state.pendingPurchase.pendingPurchase
    }
}
export default connect(mapStateToProps,null)(Pending)