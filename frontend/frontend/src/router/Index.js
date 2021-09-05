
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import MainPage from '../pages/mainpage/MainPage'
import Layout from '../components/layout/Layout';
import Login from '../pages/dashboard/login/Login'
import AboutUs from '../pages/aboutus/AboutUs'
import ContactUs from '../pages/contactus/ContactUs'
import DashboardInventory from '../pages/dashboard/inventory/Inventory'
import DashboardInventoryCreate from '../pages/dashboard/inventory/create/createInventory'
import DashbaordInventoryView from '../pages/dashboard/inventory/information/InventoryInformation'
import DashboardSupplier from '../pages/dashboard/supplier/Supplier'
import DashboardSupplierCreate from '../pages/dashboard/supplier/create/CreateSupplier'
import DashbaordSupplierView from '../pages/dashboard/supplier/information/SupplierInformation'
import DashboardUsers from '../pages/dashboard/users/Users'
import DashboardUsersCreate from '../pages/dashboard/users/create/CreateUser'
import DashboardUsersView from '../pages/dashboard/users/information/UserInformation'
import DashboardSales from '../pages/dashboard/transactions/sales/Sales'
import DashboardSalesCreate from '../pages/dashboard/transactions/sales/create/CreateSales'
import DashboardSalesView from '../pages/dashboard/transactions/sales/information/SalesInformation'
import DashboardPurchase from '../pages/dashboard/transactions/purchase/Purchase'
import DashboardPurchaseCreate from '../pages/dashboard/transactions/purchase/create/CreatePurchase'
import DashboardPurchaseView from '../pages/dashboard/transactions/purchase/information/InformationPurchase'
import DashboardPendingPurchaseView from '../pages/dashboard/transactions/purchase/information/PendingInformationPurchase'

import DashboardPurchaseInstallment from '../pages/dashboard/installment/purchase/PurchaseInstallment'
import DashboardPurchaseInstallmentCreate from '../pages/dashboard/installment/purchase/create/PurchaseInstallmentCreate'

import DashboardCatalog from '../pages/dashboard/catalog/Catalog'
import NotFound from '../pages/notfound/NotFound'
import { connect } from 'react-redux'
const Index = ({ isLogged }) => {
  // useEffect(() => {
  //     console.log(isLogged)
  // })
  return (
    <Router>
    <Switch>

      <Route path='/:path?' exact>
        <Layout>
          <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='*' component={NotFound}/>

          </Switch>

        </Layout>

      </Route>
      
        {isLogged?<Route  path='/dashboard/:path?/:path?/:path?' exact>
          <Switch>
            <Route path='/dashboard/login' exact component={Login} />
            <Route path='/dashboard/inventory' exact component={DashboardInventory} />
            <Route path='/dashboard/inventory/create'  component={DashboardInventoryCreate} />
            <Route path='/dashboard/inventory/view/:path?'  component={DashbaordInventoryView} />
            <Route path='/dashboard/supplier' exact component={DashboardSupplier} />
            <Route path='/dashboard/supplier/create' exact component={DashboardSupplierCreate} />
            <Route path='/dashboard/supplier/view/:path?'  component={DashbaordSupplierView} />
            <Route path='/dashboard/users' exact component={DashboardUsers} />
            <Route path='/dashboard/users/create' component={DashboardUsersCreate} />
            <Route path='/dashboard/users/view/:path?' component={DashboardUsersView} />
            <Route path='/dashboard/catalog' exact component={DashboardCatalog} />
            <Route path='/dashboard/sales' exact component={DashboardSales}/>
            <Route path='/dashboard/sales/create' exact component={DashboardSalesCreate}/>
            <Route path='/dashboard/sales/view/:path?' exact component={DashboardSalesView}/>
            <Route path='/dashboard/purchase/' exact component={DashboardPurchase}/>
            <Route path='/dashboard/purchase/create' exact component={DashboardPurchaseCreate}/>
            <Route path='/dashboard/purchase/view/:path?' exact component={DashboardPurchaseView}/>
            <Route path='/dashboard/pendingpurchase/view/:path?' exact component={DashboardPendingPurchaseView}/>
            <Route path='/dashboard/installment/purchase'  exact component={DashboardPurchaseInstallment}/>
            <Route path='/dashboard/installment/purchase/create'  exact component={DashboardPurchaseInstallmentCreate}/>

            <Route path='*' component={NotFound}/>

          </Switch>

      </Route>:
      <Route path='*'>
        <Redirect to='/dashboard/login'></Redirect>
        <Route path='/dashboard/login' exact component={Login} />

      </Route>
      }
     

    </Switch>
  </Router>

  )
}
const mapStateToProps = (state) => {
  return {
      isLogged: state.auth.isLogged
  }

}

export default connect(mapStateToProps, null)(Index)


// export default () => {

//     return (
      // <Router>
      //   <Switch>
  
  
      //     <Route path='/:path?' exact>
      //       <Layout>
      //         <Switch>
      //         <Route path='/' exact component={MainPage} />
      //         <Route path='/about-us' exact component={AboutUs} />
      //         <Route path='/contact-us' exact component={ContactUs} />

      //         </Switch>
      //       <Route path='*' component={NotFound}/>

      //       </Layout>

      //     </Route>
          
      //     {
      //       <Route  path='/dashboard/:path?/:path?/:path?' exact>
      //         <Switch>
      //           <Route path='/dashboard/login' exact component={Login} />
      //           <Route path='/dashboard/inventory' exact component={DashboardInventory} />
      //           <Route path='/dashboard/inventory/create'  component={DashboardInventoryCreate} />
      //           <Route path='/dashboard/inventory/view/:path?'  component={DashbaordInventoryView} />
      //           <Route path='/dashboard/supplier' exact component={DashboardSupplier} />
      //           <Route path='/dashboard/supplier/create' exact component={DashboardSupplierCreate} />
      //           <Route path='/dashboard/supplier/view/:path?'  component={DashbaordSupplierView} />
      //           <Route path='/dashboard/users' exact component={DashboardUsers} />
      //           <Route path='/dashboard/users/create' component={DashboardUsersCreate} />
      //           <Route path='/dashboard/users/view/:path?' component={DashboardUsersView} />
      //           <Route path='/dashboard/catalog' exact component={DashboardCatalog} />
      //           <Route path='*' component={NotFound}/>

      //         </Switch>

      //     </Route>
      //     }
         
  
      //   </Switch>
      // </Router>
//     )
  
//   }
