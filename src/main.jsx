import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./contexts/themecontext.jsx"
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import "../node_modules/waypoints/lib/noframework.waypoints.js"




ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <App />
    </ThemeProvider>
  </Router>



)
