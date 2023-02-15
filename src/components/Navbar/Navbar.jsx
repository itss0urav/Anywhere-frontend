import React from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { AuthService } from "../../services";
const Navbar = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* First section */}
          <div className={styles.secOneWrap}>
            <p>
              <img
                src="https://media.discordapp.net/attachments/1070984839077036052/1070994572068524032/ALUT.png"
                width="45"
                height="27"
              ></img>
            </p>
            <div className={styles.searchBoxWrap}>
              <input
                type="text"
                className={styles.serachBox}
                placeholder="Search posts here..."
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          {/* Secode section */}
         
          <div className={styles.secTwoWrap}>
          {
            !user ? (
              <>
              
              <Link to="/login">
              <button className={styles.authBtn}>Login</button>
            </Link>
            <Link to="/signUp">
              <button className={styles.authBtn}>SignUp</button>
            </Link>
              </>
            ):(
              <>
              <Link to="/user">
              <i class="fa-solid fa-user userIcon "></i>
              </Link>
              {user}
              <i class="fa-solid fa-right-from-bracket" onClick={() => {
                localStorage.removeItem("anywhere-user")
                setUser(null)
              }}></i>
              </>
            )
          }
            
          
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
