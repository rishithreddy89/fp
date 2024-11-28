import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Register from './components/REgister'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import BookHall from './components/BookHall'
import Available from './components/Avaliable'
function App() {
    const browserRouterObj=createBrowserRouter(
        [
            {
                path:"",
                element:<RouterLayout/>,
                children:[
                    {
                        path:"",
                        element:<Home/>
                    },
                    {
                        path:"register",
                        element:<Register/>
                    },
                    {
                        path:"login",
                        element:<Login/>
                    },
                    {
                        path:"profile",
                        element:<Profile/>
                    },
                    {
                        path:"bookHall",
                        element:<BookHall/>
                    },
                    {
                        path:"available",
                        element:<Available/>
                    }
                ]
            }
        ]
    )
  return (
    <div>
        <RouterProvider router={browserRouterObj}/>
    </div>
  )
}

export default App