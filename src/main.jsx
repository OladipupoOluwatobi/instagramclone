import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InstagramApp from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstagramApp />
  </StrictMode>,
)
