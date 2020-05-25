import React from "react";
import Navbar from "./Navbar"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
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
    </div>
  )
}
export default index