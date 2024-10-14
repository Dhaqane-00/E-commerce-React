import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Hero, Todays, Features, ThisMounth, Catagories, OurProduct, Footer } from "./components/pages/index"
import Header from './components/sections/Hero/Title/Header'
import { Nav } from './components/sections/Hero/Nav/HeaderNavigations'
import Cart from './components/pages/Cart'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <section className='px-16'>
              <Todays />
              <Catagories />
              <Features />
              <ThisMounth />
              <OurProduct />
            </section>
          </>
        } />
        <Route path="/Cart" element={ <Cart/>} />
        <Route path="/SignUp" element={ <SignUp/>} />
        <Route path="/SignIn" element={ <SignIn/>} />
      </Routes>
     <Footer />
    </main>
  )
}

export default App