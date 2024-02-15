export const phoneRoutes = [
    {
        path: '/',
        name: 'Desktop',
        component: () => import('../views/mobile/phone/home')
    },
    {
        path: "/destination",
        name: "Destination",
        component: () => import("../views/mobile/phone/destination")
    },
    {
        path: "/crew",
        name: "Crew",
        component: () => import("../views/mobile/phone/crew")
    },
    {
        path: "/technology",
        name: "Technology",
        component: () => import("../views/mobile/phone/tech")
    }
]