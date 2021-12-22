import Sidebar from "./sidebar/sidebar";
import layout from "./layout.module.css"
import MainHeader from "./header/mainHeader";
import { Fragment } from "react";


function Layout(props) {
    return(
        <Fragment>
            
            <div className = {layout.layout}>
        <Sidebar />
        <MainHeader />
        <main className = {layout.main}> {props.children} </main>
        </div>
        <div >          
        </div>

        </Fragment>
    )
}

export default Layout;