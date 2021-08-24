
import Layout from './components/layout/Layout';
import MainPage from './pages/mainpage/MainPage'
import ContactUs from './pages/contactus/ContactUs'
import Login from './pages/dashboard/login/Login'
import Routers from "./router/Index";
import store from './redux/store'
import axios from 'axios'
import { Provider } from 'react-redux'

import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
axios.defaults.baseURL = "http://localhost:3000/api/v1/"

function App() {
  
  return (
    <Provider store={store}>
      <Routers></Routers>

    </Provider>
    
 
  );
}

export default App;
