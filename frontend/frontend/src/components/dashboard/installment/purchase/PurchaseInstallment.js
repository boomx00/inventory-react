import {NavLink,useHistory} from 'react-router-dom'
import DataGrid from '../../../utilities/dataGrid/TableDataGrid'
import Button from '@material-ui/core/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import InstallmentAll from '../component/categories/installmentAll';
import InstallmentPending from '../component/categories/installmentPending';
const PurchaseInstallment = (props)=>{
  const history = new useHistory()
    const columns = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'purchaseRef', headerName: 'Purchase Ref', width: 170 },
        { field: 'supplier', headerName: 'Supplier', width: 170 },
        { field: 'amount', headerName: 'Total', width: 170 },
        { field: 'amount', headerName: 'To Be Paid', width: 170 },
        {field: 'status', headerName:'Status', width:170},
        { field: 'paid', headerName: 'Paid', width: 170 },
        { field: 'confirmed', headerName: 'Confirmed', width: 170 },
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
    const pendingColumns=[
      { field: 'id', headerName: 'ID', width: 170 },
        { field: 'purchaseRef', headerName: 'Purchase Ref', width: 170 },
        { field: 'supplier', headerName: 'Supplier', width: 170 },
        { field: 'amount', headerName: 'Total', width: 170 },
        { field: 'amount', headerName: 'To Be Paid', width: 170 },
        {field: 'status', headerName:'Status', width:170},
        { field: 'paid', headerName: 'Paid', width: 170 },
        { field: 'confirmed', headerName: 'Confirmed', width: 170 },
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
                  onClick={()=>redirectPending(params.row)}
                >
                  Open
                </Button>
              </strong>
            ),
          }
    ]
    const redirect = (data)=>{
      // console.log(data)
      history.push('/dashboard/installment/purchase/view/'+data.id,{data:data})
    }
    const redirectPending=(data)=>{
      // console.log(data)
      history.push('/dashboard/pendinginstallment/view/'+data.id,{data:data})
    }
    return(
      <Tabs defaultActiveKey="installmentAll" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="installmentAll" title="All">
        <InstallmentAll columns={columns} data={props.data.installment}></InstallmentAll>
       </Tab>
       <Tab eventKey="installmentPending" title="Pending">
        <InstallmentPending columns={pendingColumns} data={props.pending.installmentPending}></InstallmentPending>
       </Tab>
        </Tabs>
        
    )
}
export default PurchaseInstallment