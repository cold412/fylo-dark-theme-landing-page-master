import React from 'react'
import '../styles/footer.scss'
import logo from '../img/logo.svg'
import location from '../img/icon-location.svg'
import phone from '../img/icon-phone.svg'
import email from '../img/icon-email.svg'

function Footer() {
    return (
        <div>

        <div className="footer__container">


            <div className="footer__logo">
            <img src={logo} alt="logo"/>
            </div>

        </div>

        <div className="footer2">
            <div className="1">
            <img src={location} alt=""/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, harum adipisci! Ad molestiae quae illum optio recusandae repellendus rem atque!</p>
            </div>
            <div className="2">
            <img src={phone} alt=""/>
            <p>+1-543-213-4567</p>
            <img src={email} alt=""/>
            <p>example@fylo.com</p>
            </div>
            <div className="3">
                <h4>About Us</h4>
                <h4>Jobs</h4>
                <h4>Press</h4>
                <h4>Blog</h4>
            </div>
            <div className="4">

                <h4>Contact Us</h4>
                <h4>Terms</h4>
                <h4>Privacy</h4>

            </div>
            <div className="5">
            <a href="" class="fa fa-lg fa-facebook-official"></a>
          <a href="" class="fa fa-twitter-square"></a>
          <a href="" class="fa fa-instagram"></a>
            </div>
        </div>
        </div>
    )
}

export default Footer
