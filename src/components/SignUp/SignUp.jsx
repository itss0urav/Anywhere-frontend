import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signUp.module.css";
import { AuthService } from "../../services";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const SignUp = () => {
  const Authenticate = new AuthService();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(Authenticate.createUser, {
    onSuccess: (data) => {
      data && navigate("/login");
    },
  });

  async function registerUser(e) {
    e.preventDefault();

    const password = passwordRef.current.value;
    if (password.length < 8) {
      setAlertMessage("Password should be at least 8 characters long");
      return;
    }

    const userDetails = {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password,
      role: "user",
    };

    mutate(userDetails);
  }

  return (
    <>
      {isLoading ? (
        <div
          style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
          <CircleLoader color="#36d7b7" size={106} />
        </div>
      ) : (
        <div>
          <div className={styles.alertMessage}>
            {alertMessage && (
              <div className="bg-red-200 text-red-800 p-3 rounded-md mb-4">
                {alertMessage}
              </div>
            )}
          </div>
          <div className={styles.wrappper}>
            <form className={styles.formWrap} onSubmit={registerUser}>
              <span className={styles.loginCaption}>SignUp</span>
              <input
                type="text"
                placeholder="Enter your username"
                required
                ref={userNameRef}
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                ref={emailRef}
              />
              <input
                type="password"
                placeholder="Enter your password"
                required
                ref={passwordRef}
              />
              <div className={styles.buttonFix}>
                <button>SignUp</button>
              </div>

              <span className={styles.signup}>
                Already have an account ?{" "}
                <Link to="/login" className="link">
                  LogIn
                </Link>
                <p className={styles.contactUsButton}>
                  <a href="https://tawk.to/chat/640d9f5b4247f20fefe56404/1grajd02l">
                    Contact US
                  </a>
                </p>
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
