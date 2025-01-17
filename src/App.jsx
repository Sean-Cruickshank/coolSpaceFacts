import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "/src/components/layout/Layout.jsx"
import Home from "./components/Home.jsx"
import Size from './components/compare/Size.jsx'
import Distance from './components/compare/Distance.jsx'
import Temperature from './components/compare/Temperature.jsx'
import Speed from './components/compare/Speed.jsx'
import Sources from './components/Sources.jsx'
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
          <Route path="sources" element={<Sources />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}