import React from 'react'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.wrappper}>
      <form className={styles.formWrap}>
        <span className={styles.loginCaption}>Login</span>
        <input type="text" placeholder='Enter your username'/>
        <input type="text" placeholder='Enter your password'/>
        <button>Login</button>
        <span className={styles.signup}>New to Anywhere ? sign up</span>
      </form>
    </div>
  )
}

export default Login