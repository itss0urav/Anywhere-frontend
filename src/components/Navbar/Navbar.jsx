import React, { useRef } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { callApi } from "../../services/callApi";

const Navbar = () => {
  const { user, setUser, posts, setPosts } = useContext(UserContext);

  const searchRef = useRef();

  async function searchPost() {
    const response = await callApi({
      method: "get",
      relativePath: `/post?title=${searchRef.current.value}&&isPrefix=${true}`,
    });

    setPosts(response?.data);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* First section */}
          <div className={styles.secOneWrap}>
            <p>
              <Link to="/">
                <img
                  src="https://media.discordapp.net/attachments/1070984839077036052/1070994572068524032/ALUT.png"
                  width="45"
                  height="27"
                ></img>
              </Link>
            </p>
            <div className={styles.searchBoxWrap}>
              <input
                type="text"
                className={styles.serachBox}
                ref={searchRef}
                placeholder="Search posts here..."
                onChange={(e) => {
                  if (!e.target.value) searchPost();
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    searchPost();
                  }
                }}
              />
              <i
                class="fa-solid fa-magnifying-glass"
                onClick={() => searchPost()}
              ></i>
            </div>
          </div>
          {/* Secode section */}

          <div className={styles.secTwoWrap}>
            {!user ? (
              <>
                <Link to="/login">
                  <button className={styles.authBtn}>Login</button>
                </Link>
                <Link to="/signUp">
                  <button className={styles.authBtn}>SignUp</button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/user">
                  <i class="fa-solid fa-user userIcon "></i>
                </Link>
                {user}
                <i
                  class="fa-solid fa-right-from-bracket"
                  onClick={() => {
                    localStorage.removeItem("anywhere-user");
                    setUser(null);
                  }}
                ></i>
              </>
            )}
            <Link to="/tos">
              <i class="fa-solid fa-question"></i>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
