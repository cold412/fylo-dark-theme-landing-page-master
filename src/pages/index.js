import React from "react";
import Navbar from "./Navbar"
import Page1 from "./Page1"
import '../styles.scss'


const index = () => {
  return (
    <div className="MainCont">
      <Navbar />
      <Page1 />

    </div>
  )
}
export default index