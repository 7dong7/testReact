import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* app 컴퍼넌트를 랜더링 하고 있다 import App from './App.jsx' 를 통해서 */}
  </StrictMode>,
)
