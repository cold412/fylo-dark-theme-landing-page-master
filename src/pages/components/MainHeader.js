import React from 'react'
import '../../styles/mainheader.scss'



function MainHeader( props ) {
    return (
        <div className="MainHeader">
            <h1>{props.text}</h1>
        </div>
    )
}

export default MainHeader
