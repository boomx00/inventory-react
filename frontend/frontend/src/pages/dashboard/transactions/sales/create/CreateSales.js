import DashboardLayout from "../../../../../components/layout/DashboardLayout"
import SalesCreateForm from "../../../../../components/dashboard/transaction/sales/create/CreateSales"
import "./CreateSales.css"
const CreateSales = ()=>{
    return(
        <DashboardLayout>
            <SalesCreateForm></SalesCreateForm>
        </DashboardLayout>
    )
}
export default CreateSales