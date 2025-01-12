import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./components/Home.jsx"
import Size from './components/Size.jsx'
import Distance from './components/Distance.jsx'
import Temperature from './components/Temperature.jsx'
import Speed from './components/Speed.jsx'
import Attributions from './components/Attributions.jsx'
import Error404 from './components/Error404.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="size" element={<Size />} />
          <Route path="temperature" element={<Temperature />} />
          <Route path="speed" element={<Speed />} />
          <Route path="distance" element={<Distance />} />
          <Route path="attributions" element={<Attributions />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}