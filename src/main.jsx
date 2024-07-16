import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import "../node_modules/waypoints/lib/noframework.waypoints.js"
import "../node_modules/glightbox/dist/css/glightbox.min.css"
import '../node_modules/glightbox/dist/js/glightbox.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Router>

      <App />
    </Router>
  

)
