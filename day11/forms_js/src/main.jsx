import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import KmToMiles from './components/kmTOmiles.jsx'
import CelsiusToFahrenheit from './components/celsiusTOfahrenheit.jsx'
import PoundsToKg from './components/poundsTOkg.jsx'
import AreaOfCircle from './components/areaOFcircle.jsx'
import SimpleInterest from './components/SI.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KmToMiles />
    <CelsiusToFahrenheit />
    <PoundsToKg />
    <AreaOfCircle />
    <SimpleInterest />
    <App />
  </StrictMode>,
)
