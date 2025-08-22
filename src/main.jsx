import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GeneralInfo from './GeneralInfo.jsx'
import Education from './components/Education'
import Experience from './components/Experience'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <Education />
    <Experience />
  </StrictMode>,
)
