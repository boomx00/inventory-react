import { DataGrid } from '@material-ui/data-grid';

const TableDataGrid=(props)=>{
    const pressed = ()=>{
        console.log(props.rows)
    }
    return(
        <div style={{ height: 600, width: '100%',marginTop:50 }}>
          {/* <h2 onClick={pressed}>aa</h2> */}
      <DataGrid rows={props.rows} columns={props.columns} 
        pageSize={5} 
      />
    </div>
    )
}

export default TableDataGrid;