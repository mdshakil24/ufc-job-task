import './App.css'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Sections from './components/Sections/Sections'
import Convenience from './components/Convenience/Convenience'
import Testimonials from './components/Testimonials/Testimonials'



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Sections />
      <Convenience />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
