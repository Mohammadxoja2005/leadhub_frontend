import Header from "./header";
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default Layout