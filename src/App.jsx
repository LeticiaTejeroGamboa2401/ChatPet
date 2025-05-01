import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route
        path="/home"
        element={<Home/>}/>
        <Route
        path="/login"
        element={<Login/>}/>
        <Route
        path="/dashboard"
        element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
