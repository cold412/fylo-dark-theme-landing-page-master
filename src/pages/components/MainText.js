import React from 'react'
import '../../styles/maintext.scss'

const MainText = (props) => {
    return (
        <div className="MainText">
           <p>{props.text}</p> 
        </div>
    )
}

export default MainText
