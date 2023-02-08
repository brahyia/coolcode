import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Navbar/brest.png"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=''></img>
        </div>
        <div className='links'>
          <Link className='link' to={'/?cat=art'}>
          <h5>Resources</h5>
          </Link>
          <Link className='link' to={'/?cat=about'}>
          <h5>About Breast Cancer</h5>
          </Link>
          <Link className='link' to={'/?cat=findSupport'}>
          <h5>Find Support Near You</h5>
          </Link>

          <span>username</span>
          <span>Logout</span>
          <span>
            <Link></Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar