import React from 'react'
import { Hero, Todays, Features, ThisMounth, Catagories, OurProduct, Footer} from "./components/pages/index"

function App() {
  return (
    <main>
      <Hero />
      <section className='px-16'>
        <Todays />
        <Features />
        <ThisMounth />
        <Catagories />
        <OurProduct />
        <Footer />
      </section>
    </main>
  )
}

export default App