import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AllPurchases from './components/categories/All'
import { useHistory } from 'react-router'
import { Button } from '@material-ui/core'
const Purchase = () =>{
    const history = new useHistory()
    const redirect=(data)=>{
        history.push('/dashboard/purchase/view/'+data.id,{data:data})
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'code', headerName: 'Code', width: 170 },
        { field: 'date', headerName: 'Date', width: 170 },
        { field: 'supplier', headerName: 'Supplier', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'total', headerName: 'Total', width: 170 },
        { field: 'paid', headerName: 'Paid', width: 170 },
        { field: 'unpaid', headerName: 'Unpaid', width: 170 },
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
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="all" title="All">
        <AllPurchases columns={columns}></AllPurchases>
  </Tab>
  <Tab eventKey="pending" title="Pending">
  <p>lorem aaaaa</p>
  </Tab>
  
</Tabs>
    )
}
export default Purchase