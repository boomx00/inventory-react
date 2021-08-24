
import { NavLink } from "react-router-dom";
import './DashboardLayout.css'
import DashboardNavbar from '../dashboard/navbar/DashboardNavbar'
const DashboardLayout = (props)=>{
    return(
        <div className="dashboard-main">
            <DashboardNavbar></DashboardNavbar>
            <div >
                <main>
                    <div className="dashboard-contents">
                        {props.children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;