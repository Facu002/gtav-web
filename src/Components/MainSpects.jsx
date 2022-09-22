import React from 'react'
import character from '../media/characters.png'
import gtavlogo from '../media/cc4b8d5c455ccb92dc0c.svg'
function MainSpects() {
    return (
        <div className='MainSpects-container'>
            <div className="MainSpects-characters">
                <>
                <img className="MainSpects-characters__img" src={character} alt="gtav-character" />
                <div>
                    <img src={gtavlogo} alt="" />
                    <h2>Te damos la bienvenida a Los Santos</h2>
                    <>
                        <p>Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.</p>
                        <p>Los jugadores actuales pueden transferir su progreso del modo Individual de GTA V y sus personajes y progresos de GTA Online a PlayStation®5 y Xbox Series X|S mediante una transferencia única.</p>
                    </>
                </div>
                </>

            </div>
        </div>
    )
}

export default MainSpects