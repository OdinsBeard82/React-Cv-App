import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GeneralInfo from './GeneralInfo.jsx'
import './index.css'
import EducationalExperience from './EducationalExperience.jsx'
import PracticalExperience from './PracticalExperience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationalExperience />
    <PracticalExperience />
  </React.StrictMode>,
)
