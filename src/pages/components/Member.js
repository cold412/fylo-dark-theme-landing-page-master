import React from 'react'
import '../../styles/member.scss'

function Member(props) {
    return (
        <div className="member__container">
            <div className="member__left">
                <img src={props.image} alt="" />
            </div>
            <div className="member__right">
                <h3>{props.name}</h3>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Member
