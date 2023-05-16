import React from "react";
import "./TOS.css";
import { Link } from "react-router-dom";

const TOS = () => {
  return (
    <div className="TOS">
      <h1>Terms of Service</h1>
      <p className="intro">
        Welcome to our community discussion website. By accessing or using our
        site, you agree to comply with and be bound by the following terms and
        conditions:
      </p>
      <h2>Content</h2>
      <p>
        You are solely responsible for any content that you post or upload to
        the site. Posting NSFW(Not Safe For Work) content without putting the
        tag is rule breaking.
      </p>
      <h2>Conduct</h2>
      <ul>
        <li>
          <span className="bullet-point" /> Post or transmit any content that is
          unlawful, threatening, abusive, defamatory, vulgar, obscene, or
          otherwise objectionable
        </li>
        <li>
          <span className="bullet-point" /> Impersonate any person or entity or
          falsely state or otherwise misrepresent your affiliation with a person
          or entity
        </li>
        <li>
          <span className="bullet-point" /> Engage in any activity that could
          harm, disable, or overburden our servers or networks
        </li>
      </ul>
      <h2>Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to the site at
        any time without notice for any reason, including, without limitation, a
        breach of these terms and conditions.
      </p>
      <h2>Changes to these terms</h2>
      <p>
        We may revise these terms and conditions at any time without notice. By
        continuing to use the site after any changes, you agree to be bound by
        the revised terms and conditions.
      </p>
      <p className="outro">
        If you have any questions, please contact us{" "}
        <Link to="https://tawk.to/chat/640d9f5b4247f20fefe56404/1grajd02l">
          <i class="fa-solid fa-handshake-angle fa-bounce"></i>
        </Link>
      </p>
    </div>
  );
};

export default TOS;
