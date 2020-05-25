import React from 'react'
import '../../styles/page2element.scss'

function Page2element(props) {
    return (
        <div className="page2element">
            <img src={props.image} alt="" />
            <h1>{props.head}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Page2element
