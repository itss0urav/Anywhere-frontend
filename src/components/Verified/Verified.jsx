import React, { useState } from "react";
import styles from "./Verified.module.css";
import Requirements from "../Pages/requirements/requirements";

const VerifiedPartnerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your API call or any other logic here to submit the form
    console.log({ name, email, company, website });
  };

  return (
    <div>
      <div className={styles.reqWrap}>
        <Requirements />
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <label htmlFor="website">Website:</label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />

        <button type="submit">Apply for Verified Partner Profile</button>
      </form>
    </div>
  );
};

export default VerifiedPartnerForm;
