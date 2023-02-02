import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./signUp.module.css"
const SignUp = () => {
  return (
    <div className={styles.wrappper}>
      <form className={styles.formWrap}>
        <span className={styles.loginCaption}>Sign Up</span>
        <input type="text" placeholder='Enter your username'/>
        <input type="text" placeholder='Enter your email'/>
        <input type="text" placeholder='Enter your password'/>
        <button>Login</button>
        <span className={styles.signup}>Already have an account ? <Link to="/login" className='link'>login</Link></span>
      </form>
    </div>
  )
}

export default SignUp