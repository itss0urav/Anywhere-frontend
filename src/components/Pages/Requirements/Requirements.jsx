import React, { useContext, useRef, useState } from "react";
import styles from "./Requirements.module.css";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { storage } from "../../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const VerificationPage = () => {
  const emailRef = useRef();
  const companyRef = useRef();
  const websiteRef = useRef();
  const fullNameRef = useRef();
  const [governmentId, setGovernmentId] = useState();
  const { userId } = useContext(UserContext);

  const handleVerificationRequest = async function (e) {
    e.preventDefault();
    let fileUrl;
    if (governmentId) {
      const fileName = Date.now() + governmentId.name;
      const storageRef = ref(storage, fileName);
      await uploadBytes(storageRef, image).then((snapshot) => {
        console.log(snapshot);
      });
      fileUrl = await getDownloadURL(ref(storage, fileName));
    }
    const requestObj = {
      fullName: fullNameRef.current.value,
      company: companyRef.current.value,
      website: websiteRef.current.value,
      email: emailRef.current.value,
      userId,
      governmentId: fileUrl,
    };

    const response = await axios.post(
      "http://localhost:5000/verification",
      requestObj
    );
    response && console.log(response);
  };

  return (
    <div className={styles.requirementsWrap}>
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
          <input type="text" ref={companyRef} name="company" required />
        </label>
        <br />

        <label>
          Website:
          <input type="text" ref={websiteRef} name="website" required />
        </label>
        <br />

        <label>
          Government-Issued ID:
          <input
            type="file"
            name="id"
            onChange={(e) => setGovernmentId(e.target.files[0])}
            accept="image/*,.pdf"
            required
          />
        </label>
        <br />

        {/* <label>
          Proof of Address:
          <input type="file" name="address" accept="image/*,.pdf" required />
        </label> */}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerificationPage;
