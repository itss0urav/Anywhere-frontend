import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Posts from "./components/Posts/Posts";
import FeedbackForm from "./components/Pages/FeedbackForm/FeedbackForm";
import Sidebar from "./components/Pages/Sidebar/Sidebar";
import User from "./components/Pages/User/User";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Posts />} />
            </Route>
            <Route path="logIn" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="FeedbackForm" element={<FeedbackForm />} />
            <Route path="Sidebar" element={<Sidebar />} />
            <Route path="User" element={<User />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      
    </div>
    
  );
}
export default App;