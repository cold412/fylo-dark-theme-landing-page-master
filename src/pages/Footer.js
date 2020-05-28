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
            <div className="footer2__box1">
            <img src={location} alt=""/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, harum adipisci! Ad molestiae quae illum optio recusandae repellendus rem atque!</p>
            </div>
            <div className="footer2__box2">
                <div className="box2__left">

            <img src={phone} alt=""/>
            <p>+1-543-213-4567</p>

                </div>

                <div className="box2__right">

            <img src={email} alt=""/>
            <p>example@fylo.com</p>
                </div>
            </div>
            <div className="footer2__box3">
                <h5>About Us</h5>
                <h5>Jobs</h5>
                <h5>Press</h5>
                <h5>Blog</h5>
            </div>
            <div className="footer2__box4">

                <h5>Contact Us</h5>
                <h5>Terms</h5>
                <h5>Privacy</h5>

            </div>
            <div className="footer2__box5">
            <a href="" class="fa fa-lg fa-facebook-official"></a>
          <a href="" class="fa fa-twitter-square"></a>
          <a href="" class="fa fa-instagram"></a>
            </div>
        </div>
        </div>
    )
}

export default Footer
