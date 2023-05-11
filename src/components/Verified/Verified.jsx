import React, { useContext, useRef, useState } from "react";
import requirementsStyles from "../Pages/Requirements/Requirements.module.css";
import verfifiedStyles from "./Verified.module.css";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from "../../context/UserContext";
import { storage } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const VerifiedPartnerForm = () => {
  const emailRef = useRef();
  const companyRef = useRef();
  const websiteRef = useRef();
  const fullNameRef = useRef();
  const [governmentId, setGovernmentId] = useState();
  const { userId, user, email } = useContext(UserContext);
  const navigate = useNavigate();
  const notify = () => toast("Verifcation request send successfully");

  const handleVerificationRequest = async function (e) {
    e.preventDefault();
    let fileUrl;
    const fileName = Date.now() + governmentId?.name;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, governmentId).then((snapshot) => {
      console.log(snapshot);
    });
    fileUrl = await getDownloadURL(ref(storage, fileName));

    console.log(fileUrl);
    const requestObj = {
      fullName: user,
      company: companyRef.current.value,
      website: websiteRef.current.value,
      email: email,
      userId,
      governmentId: fileUrl,
    };
    console.log(requestObj);

    const response = await axios.post(
      "http://localhost:5000/verification",
      requestObj
    );
    if (response) {
      notify();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className={verfifiedStyles.wrap}>
      <div className={requirementsStyles.requirementsWrap}>
        <h1>Verification Requirements</h1>
        <ul>
          <li>👉At least 15,000 Upvotes in total</li>
          <li>👉Public figure or celebrity status</li>
          <li>👉Email address</li>
          <li>👉Government-issued ID</li>
          <li>👉Proof of address</li>
        </ul>
        <h2>Preparing for Verification</h2>
        <ul>
          <li>👉Be active on the platform</li>
          <li>👉Engage with your followers</li>
          <li>👉Post high-quality content</li>
        </ul>
        <p>
          Any doubts? Contact Us{" "}
          <a href="https://tawk.to/chat/640d9f5b4247f20fefe56404/1grajd02l">
            here
          </a>{" "}
          to get started.
        </p>
        <p>Please fill out the form below and submit the required documents:</p>
        <form onSubmit={handleVerificationRequest}>
          <label>
            Full Name:
            <input type="text" ref={fullNameRef} name="name" required />
          </label>
          <br />

          <label>
            Email Address:
            <input type="email" ref={emailRef} name="email" required />
          </label>
          <br />

          <label>
            Company:
            <input type="text" ref={companyRef} name="company" />
          </label>
          <br />

          <label>
            Website:
            <input type="text" ref={websiteRef} name="website" />
          </label>
          <br />

          <label>
            Government-Issued ID:
            <input
              type="file"
              name="id"
              onChange={(e) => setGovernmentId(e.target.files[0])}
              accept="image/*,.pdf"
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifiedPartnerForm;
