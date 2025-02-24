import {Route, Routes} from "react-router-dom";
import Layout from "../components/layout";

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Layout/>}>
                {/*{publicRoutes.map((route, idx) => (*/}
                {/*    <Route path={route.path} element={route.element} key={idx}/>*/}
                {/*))}*/}
            </Route>
        </Routes>
    )
}

export default Router;