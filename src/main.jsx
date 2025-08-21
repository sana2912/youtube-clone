import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // BrowserRouter is used to enable routing in the application
    // It allows us to use the <Link> component for navigation
    // and the <Route> component to define different routes */}
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>,
)
