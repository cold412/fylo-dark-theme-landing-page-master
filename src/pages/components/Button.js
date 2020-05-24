import React from 'react'
import '../../styles/button.scss'

const Button = (props) => {
    return (
        <div className="buttonContainer">
            <h3>{props.buttonText}</h3>
        </div>
    )
}

export default Button
