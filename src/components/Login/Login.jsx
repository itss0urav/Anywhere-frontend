import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useMutation } from "react-query";
import { AuthService } from "../../services/";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
const Login = () => {
  const authenticate = new AuthService();
  const navigate = useNavigate();
  const { acessToken, setAccessToken, setUser } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { mutate } = useMutation(authenticate.loginUser, {
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      localStorage.setItem("anywhere-user", data.username);
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
    <div className={styles.wrappper}>
      <form className={styles.formWrap} onSubmit={loginUser}>
        <span className={styles.loginCaption}>LogIn</span>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
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
  );
};

export default Login;
