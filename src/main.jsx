import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SportApp } from './SportApp.jsx'
import { SportContextProvider } from './context/SportContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SportContextProvider>
      <SportApp />
    </SportContextProvider>
  </React.StrictMode>,
)
