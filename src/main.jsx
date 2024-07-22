import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./contexts/themecontext.jsx"
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import "../node_modules/waypoints/lib/noframework.waypoints.js"
import "../node_modules/glightbox/dist/css/glightbox.min.css"
import '../node_modules/glightbox/dist/js/glightbox.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <App />
    </ThemeProvider>
  </Router>



)
