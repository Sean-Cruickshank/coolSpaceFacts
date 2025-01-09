import { createRoot } from 'react-dom/client'
import App from './App'
import './css/home.css'
import './css/compare.css'
import './css/nav.css'
import './css/site.css'

const root = createRoot(document.querySelector('#root'))
root.render(<App />)