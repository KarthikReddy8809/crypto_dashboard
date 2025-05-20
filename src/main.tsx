import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {routeTree} from './routeTree.gen'
import {createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({
    routeTree,
    
})
createRoot(document.getElementById('root')!).render(
    <>
    <App />
    <RouterProvider router={router}/>
    </>
)
