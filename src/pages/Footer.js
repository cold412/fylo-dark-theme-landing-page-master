import React from 'react'
import '../styles/footer.scss'
import logo from '../img/logo.svg'

function Footer() {
    return (
        <div className="footer__container">


            <div className="footer__logo">
            <img src={logo} alt="logo"/>
            </div>

        </div>
    )
}

export default Footer
