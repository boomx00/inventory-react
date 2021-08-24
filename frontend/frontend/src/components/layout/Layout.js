import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Fragment } from 'react';
import './Layout.css'
const Layout = (props) =>{
    return(
        <div >
        <Navbar></Navbar>
        <div className="background">
        <main className="content-layout">{props.children}</main>
        <footer>
        <Footer></Footer>
            </footer>
        </div>

        </div>
    )
}
export default Layout