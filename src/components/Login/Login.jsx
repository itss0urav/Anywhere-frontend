import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useMutation } from "react-query";
import { AuthService } from "../../services/";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { CircleLoader } from "react-spinners";
const Login = () => {
  const authenticate = new AuthService();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { mutate, isLoading } = useMutation(authenticate.loginUser, {
    onSuccess: ({ data, status }) => {
      console.log(data);
      if (status === 201) {
        alert("You are banned by anywhere");
        return;
      }
      localStorage.setItem("anywhere-user", JSON.stringify(data));
      setUser(data.username);
      navigate("/");
    },
  });

  async function loginUser(e) {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await mutate(userDetails);
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
        <div className={styles.wrappper}>
          <form className={styles.formWrap} onSubmit={loginUser}>
            <span className={styles.loginCaption}>LogIn</span>
            <input type="email" placeholder="Enter your email" ref={emailRef} />
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <div className={styles.buttonFix}>
              <button>LogIn</button>
            </div>

            <span className={styles.signup}>
              New to Anywhere ?
              <Link to="/signUp" className="link">
                {" "}
                SignUp
              </Link>
              <p className={styles.contactUsButton}>
                <a href="https://tawk.to/chat/640d9f5b4247f20fefe56404/1grajd02l">
                  Contact US
                </a>
              </p>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
