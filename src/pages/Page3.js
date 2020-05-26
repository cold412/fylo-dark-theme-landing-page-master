import React from 'react'
import MainHeader from '../pages/components/MainHeader'
import MainText from '../pages/components/MainText'
import Title from '../pages/components/Title'
import mainImg from '../img/illustration-stay-productive.png'
import '../styles/page3.scss'

function Page3() {
    return (
        <div className="page3__container">
            <div className="page3__left">
      <img src={mainImg} alt="MainImage" />
            </div>
            <div className="page3__right">

      <MainHeader text="Stay productive, wherever you are" />
      <MainText   text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs." />
      <MainText   text="Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required." />
        <Title />
            </div>
        </div>
    )
}

export default Page3
