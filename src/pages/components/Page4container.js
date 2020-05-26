import React from 'react'
import MainText from './MainText'
import Member from './Member'
import '../../styles/page4container.scss'

const Pate4container = (props) => {
    return (
        <div className="pate4Cont">
           <MainText text={props.text} />
            <Member image={props.image} name={props.name} title={props.title}/>
        </div>
    )
}

export default Pate4container
