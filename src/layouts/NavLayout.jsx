import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const NavLayout = () => {
  return (
    <>
    <NavBar />
    <div>
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default NavLayout