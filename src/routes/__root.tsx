import {createRootRoute, Outlet} from '@tanstack/react-router'
import {NavBar} from '../Components/NavBar'
export const Route = createRootRoute({
    component: () =>{ 
    return(
    <>
    <NavBar/>
    <Outlet/>
    </>
    )
    }
});
