import {Route, Routes} from "react-router-dom";
import Layout from "../components/layout";
import {publicRoutes} from "./routes-link.tsx";

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                {publicRoutes.map((route, idx) => (
                    <Route path={route.path} element={route.element} key={idx}/>
                ))}
            </Route>
        </Routes>
    )
}

export default Router;