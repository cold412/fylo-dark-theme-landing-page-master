import React from 'react'
import '../styles/navbar.scss'
import logo from '../img/logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__logo">
            <img src={logo} alt="logo"/>
            </div>
            <div className="nav__right">
                <ul>
                    <li><a href=""></a>Features</li>
                    <li><a href=""></a>Team</li>
                    <li><a href=""></a>Sign In</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
