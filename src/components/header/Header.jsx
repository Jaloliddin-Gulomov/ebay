import React from 'react'
import c from './Header.module.scss'
import { Link } from 'react-router-dom'
import Container from '../utils/Components'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()  
  return pathname.includes("/register") ? <></> : (
    <> 
      <Container>
        <div className={c.header}>
          <p>Hi! <Link to="/register/signin">Sign in</Link> or <Link to="/register">register</Link> </p>
        </div>
      </Container>
      <hr />
    </>
  )
}

export default Header