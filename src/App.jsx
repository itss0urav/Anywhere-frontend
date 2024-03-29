import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import Posts from "./components/Posts/Posts";
import FeedbackForm from "./components/Pages/FeedbackForm/FeedbackForm";
import User from "./components/Pages/User/User";
import Vote from "./components/Vote/Vote";
import Comment from "./components/Comment/Comment";
import CreatePost from "./components/CreatePost/CreatePost";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Cmt from "./components/Comment/cmt";
import ReportPost from "./components/Report/ReportPost";
import Verified from "./components/Verified/Verified";
import VerificationPage from "./components/Pages/requirements/requirements";
import Tos from "./components/Pages/TOS/tos";
import Overview from "./components/modals/Overview";
import ManageUsers from "./components/ManageaUsers";
import Trending from "./components/Trending";
import FeedBackMod from "./components/FeedBacksMod/FeedBackMod";
import ReportMod from "./components/reportMod/ReportMod";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Posts />} />
            <Route path="/comment/:postId" element={<Comment />} />
            <Route path="/Verified" element={<Verified />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/cmt" element={<Cmt />} />
            <Route path="/ReportPost/:postId" element={<ReportPost />} />
            <Route path="/Requirements" element={<VerificationPage />} />
            <Route path="/tos" element={<Tos />} />
            <Route path="/manageUsers" element={<ManageUsers />} />
            <Route path="/overview/:postId" element={<Overview />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="feedBacksMod" element={<FeedBackMod />} />
            <Route path="reportsMod" element={<ReportMod />} />
          </Route>
          <Route path="logIn" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="FeedbackForm" element={<FeedbackForm />} />
          <Route path="User" element={<User />} />
          <Route path="Vote" element={<Vote />} />
          <Route path="createPost" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
