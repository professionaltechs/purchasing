import React from 'react'
import {Outlet} from'react-router-dom'

// COMPONENTS
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='grow'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout