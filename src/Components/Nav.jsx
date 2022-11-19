import {React, useState} from 'react'
import {NavLink} from 'react-router-dom'

import rockstar from '../media/rockstar-logo.svg'
function Nav(props) {
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
        <nav className={isActive ? 'nav navOnMenuOpen' : 'nav'}>
            <div className="nav-main-title">
                <img className='rockstar-logo' src={rockstar} alt="rockstar-logo" />
                <img className='gtav-logo' src={props.titleLogo} alt="gtav-logo" />
            </div>
            <div className="nav-sections">
                <NavLink to="/" className='nav-sections__btn' href="#">Información General</NavLink>
                <NavLink to="/online" className='nav-sections__btn' href="#">GTA Online</NavLink>
                <NavLink className='nav-sections__btn' href="#">GTA+</NavLink>
                <NavLink className='nav-sections__btn' href="#">Guías</NavLink>
                <NavLink className='nav-sections__btn' href="#">Asistencia Técnica</NavLink>
            </div>
            <div className="nav-account">
                <button>Comprar ahora</button>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </a>
            </div>
            <div className="nav-mobile__menuHbr">
                <div className="nav-mobile__account">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </a>
                </div>
                <div className={isActive ? "hamburger-btn open" : "hamburger-btn close"} onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        <div className={isActive ? "dropdown-menu" : "dropdown-menu__closed"}>
            <NavLink to="/" className='dropmenu-sections__btn' href="#"><span>Información General</span></NavLink>
            <NavLink to="/online" className='dropmenu-sections__btn' href="#"><span>GTA Online</span></NavLink>
            <NavLink className='dropmenu-sections__btn' href="#"><span>GTA+</span></NavLink>
            <NavLink className='dropmenu-sections__btn' href="#"><span>Guías</span></NavLink>
            <NavLink className='dropmenu-sections__btn' href="#"><span>Asistencia Técnica</span></NavLink>
        </div>
        </>

    )
}

export default Nav