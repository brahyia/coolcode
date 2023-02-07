import React from 'react'
import Logo from "../Navbar/brest.png"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=''></img>
        </div>
        <div className='links'>Links</div>

      </div>
    
    
    </div>
  )
}

export default Navbar