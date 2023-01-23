import React from 'react'
import Footer from '../footer/Footer'
import Header from '../navbar/Header'

const Layout = ( { children }) => {
  return (
    <>
    <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout