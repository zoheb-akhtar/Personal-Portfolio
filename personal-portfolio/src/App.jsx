import './App.scss'
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layouts"

export default function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>

    </>
  )
}

