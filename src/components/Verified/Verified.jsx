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
    <div className={styles.reqWrap}>
      <Requirements />
    </div>
  );
};

export default VerifiedPartnerForm;
