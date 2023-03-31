import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Posts from "./components/Posts/Posts";
import FeedbackForm from "./components/Pages/FeedbackForm/FeedbackForm";
import User from "./components/Pages/User/User";
import Admin from "./components/Pages/Admin/Admin";
import Vote from "./components/Vote/Vote";
import Comment from "./components/Comment/Comment";
import CreatePost from "./components/CreatePost/CreatePost";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Cmt from "./components/Comment/cmt";
import ReportPost from "./components/Report/ReportPost";
import Verified from "./components/Verified/Verified";
import Poll from "./components/Poll/Poll";
import Requirements from "./components/Pages/Requirements/Requirements";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Posts />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/Verified" element={<Verified />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/cmt" element={<Cmt />} />
            <Route path="/ReportPost" element={<ReportPost />} />
            <Route path="/Poll" element={<Poll />} />
            <Route path="/Requirements" element={<Requirements />} />
          </Route>
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="FeedbackForm" element={<FeedbackForm />} />
          <Route path="User" element={<User />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Vote" element={<Vote />} />
          <Route path="createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
