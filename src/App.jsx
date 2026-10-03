import About from './components/sections/About'
import Admissions from './components/sections/Admissions'
import Campus from './components/sections/Campus'
import CustomCursor from './components/animation/CustomCursor'
import Footer from './components/layout/Footer'
import Gallery from './components/sections/Gallery'
import Hero from './components/sections/Hero'
import Highlights from './components/sections/Highlights'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/animation/ScrollProgress'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-top focus:rounded-pill focus:bg-saffron focus:px-5 focus:py-2 font-medium shadow-elevated transition-transform"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Highlights />
        <Campus />
        <Gallery />
        <Admissions />
      </main>
      <Footer />
    </>
  )
}
