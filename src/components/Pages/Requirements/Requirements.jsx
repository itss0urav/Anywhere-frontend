import React from 'react';
const VerificationPage = () => {
  return (
    <div>
      <h1>Verification Requirements</h1>
      <ul>
        <li>At least 15,000 Upvotes in total</li>
        <li>Public figure or celebrity status</li>
        <li>Verified email address</li>
        <li>Government-issued ID</li>
        <li>Proof of address</li>
      </ul>
      <h2>How to Apply for Verification</h2>
      <p>Please fill out the form below and submit the required documents:</p>
      <form>
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Government-Issued ID:
          <input type="file" name="id" accept="image/*,.pdf" required />
        </label>
        <br />
        <label>
          Proof of Address:
          <input type="file" name="address" accept="image/*,.pdf" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Preparing for Verification</h2>
      <ul>
        <li>Be active on the platform</li>
        <li>Engage with your followers</li>
        <li>Post high-quality content</li>
      </ul>
      <p>Ready to apply for verification? Click <a href="/verification">here</a> to get started.</p>
    </div>
  );
};

export default VerificationPage;
