import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OldSchool from './Components/OldSchool.jsx'
import BonusContent from './Components/BonusContent.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element:<App />,
    },
    {
        path:"/oldschool",
        element:<OldSchool/>
    },
    {
        path:"/bonuscontent",
        element:<BonusContent />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
