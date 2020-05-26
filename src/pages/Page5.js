import React from "react"
import MainHeader from "./components/MainHeader"
import MainText from "./components/MainText"
import Button1 from "./components/Button1"
import TextInput from './components/TextInput'
import "../styles/page5.scss"

const Page5 = () => {
  return (
    <div className="page5Cont2">
      <MainHeader text="Get early access today" />
      <MainText   text="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you." />
        <div className="buttonCont">
      <TextInput />
      <Button1 buttonText="Get Started For Free"/>
        </div>
    </div>
  )
}

export default Page5
