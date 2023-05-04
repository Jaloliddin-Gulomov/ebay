import React from 'react'
import logo from '../../../assets/logo.png'
import Container from '../../utils/Components'
import { Link } from 'react-router-dom'
import c from './Signin.module.scss'

const SignIn = () => {
  return (
    <Container>
      <div>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div className={c.signin}>
         <div className={c.signin__form}>
         <h2>Hello</h2>
          <p>Sign in to eBay or <Link to='/register'>create an account</Link></p>
          <form>
            <input type="text" placeholder='Email or username'/>
            <button>Continue</button>
            <div className={c.signin__or}>
              <div></div>
              <p>or</p>
              <div></div>
            </div>
            <button>Continue with Facebook</button>
            <button className={c.google}>Continue with Google</button>
            <button className={c.google}>Continue with Apple</button>
          </form>
         </div>
        </div>
      </div>
    </Container>
  )
}

export default SignIn