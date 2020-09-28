import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { renderRoutes } from 'react-router-config'
import routes from '../router'
import '../assets/css/index.sass'

const App = () => {
  useEffect(() => {
    for (let i of routes) {
      if (window.location.pathname === i.path) {
        document.title = `${i.title}`
      }
    }
  })

  return (
    <div className='App text-light'>
      <Header />
      <main className='py-3'>{renderRoutes(routes)}</main>
      <Footer />
    </div>
  )
}

export default App
