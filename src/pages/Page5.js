import React from "react"
import MainHeader from "./components/MainHeader"
import MainText from "./components/MainText"
import Button1 from "./components/Button1"
import "../styles/page1.scss"
import mainImg from "../img/illustration-intro.png"

const Page5 = () => {
  return (
    <div className="page1Cont">
      <img src={mainImg} alt="MainImage" />
      <MainHeader text="All your files in one secure location, accessible anywhere." />
      <MainText   text="Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers." />
        <div className="buttonCont">
      <Button1 buttonText="Get Started"/>
        </div>
    </div>
  )
}

export default Page5
