import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import Education from './components/Education'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <App />
  </StrictMode>,
)
