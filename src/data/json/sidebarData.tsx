import {allroutes} from "../../app/routes.ts";

const route = allroutes;
export const SidebarData = [
    {
        label: "MAIN MENU",
        submenuOpen: true,
        showSubRoute: false,
        submenuHdr: "Main",
        submenuItems: [
            {
                label: "Dashboard",
                icon: "ti ti-layout-2",
                submenu: true,
                showSubRoute: false,

                submenuItems: [
                    {label: "Deals Dashboard", link: route.dealsDashboard},
                    {label: "Leads Dashboard", link: route.leadsDashboard},
                ],
            },
        ],
    },
    {
        label: "CRM",
        submenuOpen: true,
        showSubRoute: false,
        submenuHdr: "Inventory",

        submenuItems: [
            {
                label: "Leads",
                link: route.leads,
                subLink1: route.leadsDetails,
                subLink2: route.leadsKanban,
                icon: "ti ti-chart-arcs",
                showSubRoute: false,
                submenu: false,
            },
            {
                label: "Deals",
                link: route.deals,
                subLink1: route.dealsKanban,
                subLink2: route.dealsDetails,
                icon: "ti ti-medal",
                showSubRoute: false,
                submenu: false,
            },
            {
                label: "Contacts",
                link: route.contactList,
                subLink1: route.contactGrid,
                subLink2: route.contactDetails,
                icon: "ti ti-user-up",
                showSubRoute: false,
                submenu: false,
            },

        ],
    },
];
