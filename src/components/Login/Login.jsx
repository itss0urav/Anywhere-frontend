import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.wrappper}>
      <form className={styles.formWrap}>
        <span className={styles.loginCaption}>Login</span>
        <input type="text" placeholder='Enter your username'/>
        <input type="text" placeholder='Enter your password'/>
        <button>Login</button>
        <span className={styles.signup}>New to Anywhere ?<Link to="/signUp" className='link'> Sign Up</Link></span>
      </form>
    </div>
  )
}

export default Login