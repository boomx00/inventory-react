import DashboardLayout from "../../../../components/layout/DashboardLayout";
import Information from "../../../../components/dashboard/users/usersInformation/UserInformation"

const UserInformation = (props) =>{
    return(
        <DashboardLayout>
            <Information data={props.history.location.state.data}> </Information>
        </DashboardLayout>
    )
}

export default UserInformation;