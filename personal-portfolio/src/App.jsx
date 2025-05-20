import './App.scss'
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layouts"
import Home from "./components/Home"

export default function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>

    </>
  )
}

