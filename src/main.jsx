import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/theme.css'
import './assets/css/index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/mnkrueger">
      <ThemeProvider>
        <Navbar />
        <App /> 
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
