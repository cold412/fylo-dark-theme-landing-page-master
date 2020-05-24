import React from 'react'
import MainHeader from '../pages/components/MainHeader'
import MainText from '../pages/components/MainText'
import '../styles/page1.scss'
import mainbck from '../img/bg-curvy-desktop.svg'
import mainImg from '../img/illustration-intro.png'


const Page1 = () => {
    return (
      <div className="page1Cont">
        <img src={mainImg} alt="MainImage"/>
        <MainHeader text="All your files in one secure location, accessible anywhere."/>
        <MainText text="Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers."/>
      </div>
    )
}

export default Page1
