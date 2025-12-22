import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Header, Header1} from './Header'
import Footer from './Footer'
import About from './About' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Header1 />
    <About />
    <Footer />
  </StrictMode>,
)
