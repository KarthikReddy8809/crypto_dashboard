import {createRootRoute, Outlet} from '@tanstack/react-router'
import React from 'react'
export const Route = createRootRoute({
    component: () =>{ 
    return(
    <>
    <h1>Root</h1>
    <Outlet/>
    </>
    )
    }
});
