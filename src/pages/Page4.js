import React from 'react'
import Pate4container from '../pages/components/Page4container'
import satish from '../img/profile-1.jpg'
import bruce from '../img/profile-2.jpg'
import iva from '../img/profile-3.jpg'
import '../styles/page4.scss'

const Page4 = () => {
    return (
        <div className="page4__container">
            <Pate4container text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.
" image={satish} name="Satish Patel" title="Founder & CEO, Huddle"/>
            <Pate4container text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.
" image={bruce} name="Bruce McKenzie" title="Founder & CEO, Huddle"/>
            <Pate4container text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.
" image={iva} name="Iva Boyd" title="Founder & CEO, Huddle"/>
        </div>
        
    )
}

export default Page4
