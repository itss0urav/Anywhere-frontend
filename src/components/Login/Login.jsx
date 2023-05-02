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
    onSuccess: (data) => {
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
            <input 
              type="email" 
              placeholder="Enter your email" 
              ref={emailRef} />
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <button>LogIn</button>
            <span className={styles.signup}>
              New to Anywhere ?
              <Link to="/signUp" className="link">
                {" "}
                SignUp
              </Link>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
