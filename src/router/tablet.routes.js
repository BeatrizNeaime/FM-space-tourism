export const tabletRoutes = [
    {
        path: '/',
        name: 'Desktop',
        component: () => import('../views/mobile/tablet/home')
    },
    {
        path: "/destination",
        name: "Destination",
        component: () => import("../views/mobile/tablet/destination")
    },
    {
        path: "/crew",
        name: "Crew",
        component: () => import("../views/mobile/tablet/crew")
    },
    {
        path: "/technology",
        name: "Technology",
        component: () => import("../views/mobile/tablet/tech")
    }
]