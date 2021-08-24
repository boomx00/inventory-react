
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import ImageUploader from "../../../../components/utilities/imageUploader/ImageUploader"
import InventoryCreate from "../../../../components/dashboard/inventory/InventoryCreate/InventoryCreate";
import './createInventory.css';
const createInventory = () =>{
    
    return(
        <DashboardLayout>
            <InventoryCreate></InventoryCreate>
        </DashboardLayout>
    )
}

export default createInventory;