import React from 'react'
import '../../src/styles/page2.scss'
import Page2element from '../pages/components/Page2element'
import phoneImage from '../img/icon-access-anywhere.svg'
import security from '../img/icon-security.svg'
import collab from '../img/icon-collaboration.svg'
import file from '../img/icon-any-file.svg'

const Page2 = () => {
    return (
        <div className="page2__container">
            <Page2element image={phoneImage} head="Access your files, anywhere
" text="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.
"/>
            <Page2element image={security} head="Security you can trust
" text="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.
"/>
            <Page2element image={collab} head="Real-time collaboration
" text="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.
"/>
            <Page2element image={file} head="Store any type of file
" text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.
"/>
        </div>
    )
}

export default Page2
