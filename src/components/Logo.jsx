import React from 'react'
import Wrapper from '../assets/wrappers/Logo'
import logo from '../assets/images/logo-no-background-white.png'


const Logo = () => {
  return (
    <Wrapper>

    <div href="#"><img className='navbar-brand ' src={logo} alt="Nexus Screen" /></div>
    </Wrapper>

  )
}

export default Logo