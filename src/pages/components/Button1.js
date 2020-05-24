import React from 'react'
import '../../styles/button.scss'

const Button1 = (props) => {
    return (
        <div className="buttonContainer">
            <h3>{props.buttonText}</h3>
        </div>
    )
}

export default Button1
