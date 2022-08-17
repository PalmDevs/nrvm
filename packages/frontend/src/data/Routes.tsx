import { ReactNode } from 'react'
import { AboutPage, DependenciesPage, MainPage, UnknownPage } from "../pages"
import WithBottomNavbar from "../pages/with/WithBottomNavbar"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/',
        element: (<WithBottomNavbar />),
        subroutes: [
            { index: true, element: <MainPage /> },
            { path: '*', element: <UnknownPage /> }
        ]
    },
    {
        path: '/*',
        element: (<WithBottomNavbar showBackButton />),
        subroutes: [
            { path: 'about', element: <AboutPage /> },
            { path: 'dependencies', element: <DependenciesPage /> }
        ]
    }
] as RouteResolvable[]

export type RouteResolvable = ({ index: boolean } | { path: string }) & {
    element: ReactNode
    subroutes?: RouteResolvable[]
}