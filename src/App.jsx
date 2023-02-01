import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from "./components/Login/Login"
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
function App() {

  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Navbar />}>
       
      </Route>
      <Route  path='login' element={<Login />}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
