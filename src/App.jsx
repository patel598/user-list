import { Route, Routes } from "react-router"
import LoginPage from './pages/login'
import Dashboard from './pages/dashboard'

import './App.css'
import Layout from "./layout/layout"

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )

}

export default App
