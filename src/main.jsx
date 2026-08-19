import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import LabPage from './components/LabPage'
import './index.css'

// default to dark on first paint, regardless of which route loads first
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lab/:slug" element={<LabPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)