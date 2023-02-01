import React from 'react'
import styles from "./Navbar.module.css"
import {Outlet} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <div className={styles.wrapper}>
       <div className={styles.container}>
        {/* First section */}
        <div className={styles.secOneWrap}>
            <p>MyLogo</p>
            <div className={styles.searchBoxWrap}>

            <input type="text" className={styles.serachBox} placeholder="Search posts here..."/>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        {/* Secode section */}
        <div className={styles.secTwoWrap}>
            <button className={styles.authBtn}>Login</button>
            <button className={styles.authBtn}>SignUp</button>
            <i class="fa-solid fa-user userIcon "></i>
         </div>
       </div>
    </div>
<Outlet />
    </>
  )
}

export default Navbar