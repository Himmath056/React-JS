import React from 'react'
import Header from './componenets/Header/header'
import Footer from './componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'      //use layout as a base 

function Layout() {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout