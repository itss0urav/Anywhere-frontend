import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Post from "./components/Post/Post";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Post />}/>
          </Route>
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
