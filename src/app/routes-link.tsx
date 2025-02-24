import {allroutes} from "./routes.ts";
import Leads from "../features/leads";
import {Route} from "react-router-dom";

export const publicRoutes = [
    {
        path: allroutes.leads,
        element: <Leads/>,
        route: Route,
        title: 'Leads'
    },
]