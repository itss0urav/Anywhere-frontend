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

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(Authenticate.createUser, {
    onSuccess: (data) => {
      data && navigate("/login");
    },
  });

  async function registerUser(e) {
    e.preventDefault();

    const userDetails = {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // console.log(userDetails)
    mutate(userDetails);
  }

  return (
    <>
    
       {
        isLoading ? (
         <div style={{height:"100vh", display:"grid", placeContent:"center"}}>
           <CircleLoader color="#36d7b7" size={106}/>
         </div>) : (
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
   <button>SignUp</button>
   <span className={styles.signup}>
     Already have an account ?{" "}
     <Link to="/login" className="link">
       LogIn
     </Link>
   </span>
 </form>
</div>
         )
    }
    </>
   
  );
};

export default SignUp;
