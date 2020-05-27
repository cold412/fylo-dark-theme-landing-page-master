import React from "react";
import Navbar from "./Navbar"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"
import Footer from "./Footer"
import '../styles.scss'
import '../styles/index.scss'


const index = () => {
  return (
    <div className="MainCont">
      <Navbar />
      <div className="pate1Cont">
      <Page1 />
      </div>

      <div className="page2Cont">
      <Page2 />
      </div>
      <div className="page3Cont">
      <Page3 />
      </div>
      <div className="page4Cont">
      <Page4 />
      </div>
      <div className="page5Cont">
      <Page5 />
      </div>
      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  )
}
export default index