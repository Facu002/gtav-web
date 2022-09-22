import {React, useState} from 'react'
import title from '../media/title.png'
import rockstar from '../media/rockstar-logo.svg'
function Nav() {
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
        <nav className='nav'>
            <div className="nav-main-title">
                <img className='rockstar-logo' src={rockstar} alt="rockstar-logo" />
                <img className='gtav-logo' src={title} alt="gtav-logo" />
            </div>
            <div className="nav-sections">
                <a className='nav-sections__btn' href="#">Información General</a>
                <a className='nav-sections__btn' href="#">GTA Online</a>
                <a className='nav-sections__btn' href="#">GTA+</a>
                <a className='nav-sections__btn' href="#">Guías</a>
                <a className='nav-sections__btn' href="#">Asistencia Técnica</a>
            </div>
            <div className="nav-account">
                <button>Comprar ahora</button>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </a>
            </div>
            <div className="nav-mobile__menuHbr">
                <div className="nav-mobile__account">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            <a className='dropmenu-sections__btn' href="#"><span>Información General</span></a>
            <a className='dropmenu-sections__btn' href="#"><span>GTA Online</span></a>
            <a className='dropmenu-sections__btn' href="#"><span>GTA+</span></a>
            <a className='dropmenu-sections__btn' href="#"><span>Guías</span></a>
            <a className='dropmenu-sections__btn' href="#"><span>Asistencia Técnica</span></a>
        </div>
        </>

    )
}

export default Nav