import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Container from '../../utils/Components'
import c from './Rgister.module.scss'

const Register = () => {
  return (
    <Container>
      <div>
        <div className={c.register__title}>
          <Link to='/'><img src={logo} alt="" /></Link>
          <p>Already a member? <Link to='/register/signin'>Sign in</Link></p>
        </div>
        <div className={c.register__parent}>
          <h2>Create an account</h2>
          <div className={c.register__wrapper}>
            <div className={c.form__wrapper}>
              <form>
                <div>
                  <input type="text" placeholder='First name' />
                  <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Create account</button>
              </form>
            </div>
            <div className={c.or}>
              <div></div>
              <p>or</p>
              <div></div>
            </div>
            <button className={c.google}>Continue with Google</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Register