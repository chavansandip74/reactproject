import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/animate.css'
import './assets/css/animated-headline.css'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import './assets/css/nivo-lightbox.css'
import './assets/css/normalize.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/responsive.css'
import './assets/css/slicknav.css'
//  import './assets/css/jquery.nav.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
