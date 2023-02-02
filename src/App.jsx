import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from "./components/Login/Login"
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import SignUp from './components/SignUp/SignUp'
function App() {

  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Navbar />}>
       
      </Route>
      <Route  path='login' element={<Login />}/>
      <Route  path='signUp' element={<SignUp />}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
