import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className='logo'><img src="./images/logo.png" alt="" />
        </div>

        <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div>
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
