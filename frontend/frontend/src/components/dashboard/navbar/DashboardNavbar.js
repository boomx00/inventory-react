import { NavLink } from "react-router-dom";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <header>
      <div className="dashboard-nav-container">
        <div className="nav-logo">
          <h1>Inventory</h1>
        </div>
        <div className="dashboard-nav-content">
        <div className="dashboard-nav-link">
            <div class="dropdown">
              Master Data
              <i class="arrow down"></i>
              <div class="dropdown-content">
                <NavLink to="/dashboard/inventory">Inventory</NavLink>
                <NavLink to="/dashboard/supplier">Supplier</NavLink>
                <NavLink to="/dashboard/users">Users</NavLink>
              </div>
            </div>
          </div>
          <div className="dashboard-nav-link">
          <div class="dropdown">
              Transactions
              <i class="arrow down"></i>
              <div class="dropdown-content">
                <NavLink to="/dashboard/sales">Sales</NavLink>
                <NavLink to="/dashboard/purchase">Purchase</NavLink>
                <NavLink to="/dashboard/users">Users</NavLink>
              </div>
            </div>
          </div>
          <div className="dashboard-nav-link">
            <div class="dropdown">
              Installment
              <i class="arrow down"></i>
              <div class="dropdown-content">
              <NavLink to="/dashboard/installment/purchase">Purchase Installment</NavLink>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
