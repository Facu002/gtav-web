import React from 'react'
import css from './style/style.css'
import Nav from './Components/Nav'
import Main from './Components/GtaOnlineMain'

import title from './media/title.png'



function GtaOnline() {
    return (
    <>
        <Nav titleLogo={title}  />
        <Main />
    </>
)
}

export default GtaOnline