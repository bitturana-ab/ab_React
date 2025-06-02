import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Routes () {
  return (
    <>
        <Header/>
        {/* outlet use for same baseline Header,Footer and changes happens in between these only || outside of Oulet will be same..*/}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Routes