import React from 'react'
import Home from './Home'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function RouterLayout() {
  return (
    <div>
       <Header/>
        <div >
            <Outlet/>
        </div>
       <Footer/>
    </div>
  )
}

export default RouterLayout