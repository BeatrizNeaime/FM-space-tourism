import DesktopHome from "../views/desktop/home";
import DesktopDestination from "../views/desktop/destination";
import DesktopCrew from "../views/desktop/crew";

export const desktopRoutes = [
    {
        path: '/',
        name: 'Desktop',
        component: <DesktopHome/>
    },
    {
        path: "/destination",
        name: "Destination",
        component: <DesktopDestination />
    },
    {
        path: "/crew",
        name: "Crew",
        component: <DesktopCrew/>
    },
    {
        path: "/technology",
        name: "Technology",
        component: <DesktopTech/>
    }
]