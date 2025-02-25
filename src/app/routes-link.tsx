import {allroutes} from "./routes.ts";
import Leads from "../features/leads";
import {Route} from "react-router-dom";
import Deals from "../features/deals";
import Contacts from "../features/contacts";

export const publicRoutes = [
    {
        path: allroutes.leads,
        element: <Leads/>,
        route: Route,
        title: 'Leads'
    },
    {
        path: allroutes.deals,
        element: <Deals/>,
        route: Route,
        title: "Deals"
    },
    {
        path: allroutes.contactList,
        element: <Contacts/>,
        route: Route,
        title: "Contacts"
    }
]