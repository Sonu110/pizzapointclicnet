import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Call from '../components/call/Call'

function Layout() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Call></Call>
        <Footer></Footer>
    </div>
  )
}

export default Layout