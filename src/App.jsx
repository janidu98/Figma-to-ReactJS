import './App.css'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Testimonials from './components/Testimonials/Testimonials'
import Topics from './components/Topics/Topics'

function App() {
  
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
