import React from 'react'
import character from '../media/characters.png'
import gtavlogo from '../media/cc4b8d5c455ccb92dc0c.svg'

import panoramic1 from '../media/panoramic_banner.jpg'
import panoramic2 from '../media/panoramic_car.jpg'
import panoramic3 from '../media/panoramic_guns.jpg'
import panoramic4 from '../media/panoramic_heli.jpg'

import gtaOnlineLogo from '../media/gtaOnline.svg'
import gtaOnline from '../media/online_pj.png'

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
            <div className="MainSpects-gameplayDetails">
                <div className="MainSpects-gameplayDetails_item MainSpects-gameplayDetails__graphics">
                    <div>
                        <h3>Gráficos impresionantes</h3>
                        <p>Niveles de fidelidad y rendimiento mejorados, con nuevos modos de gráficos que ofrecen resoluciones de hasta 4K, 60 fotogramas por segundo, opciones HDR, trazado de rayos, mejoras en la calidad de las texturas y mucho más.</p>
                    </div>
                    <img src={panoramic1} alt="" />
                </div>
                <div className="MainSpects-gameplayDetails_item MainSpects-gameplayDetails__loading">
                    <div>
                        <h3>Carga más rápida</h3>
                        <p>Entra en acción prácticamente al instante, ya que el mundo de Los Santos y el condado de Blaine ahora se carga más rápido que nunca.</p>
                    </div>
                    <img src={panoramic2} alt="" />
                </div>
                <div className="MainSpects-gameplayDetails_item MainSpects-gameplayDetails__audio">
                    <div>
                        <h3>Audio 3D</h3>
                        <p>Oye los sonidos del mundo con una precisión milimétrica, desde la aceleración de un supercoche robado hasta los disparos de un tiroteo cercano, el estruendo de un helicóptero sobre tu cabeza y mucho más.</p>
                    </div>
                    <img src={panoramic3} alt="" />
                </div>
                <div className="MainSpects-gameplayDetails_item MainSpects-gameplayDetails__controls">
                    <div>
                        <h3>Controles inmersivos</h3>
                        <p>Experimenta nuevos niveles de reacción con la respuesta háptica y la resistencia dinámica gracias a los gatillos adaptativos del mando inalámbrico DualSense de PlayStation®5: siente desde el daño direccional hasta los efectos atmosféricos, los baches de las carreteras, las explosiones y mucho más.</p>
                    </div>
                    <img src={panoramic4} alt="" />
                </div>
            </div>
            <div className="MainSpects-gtaOnline">
                <div className="MainSpects-gtaOnline__text">
                    <img src={gtaOnlineLogo} alt="gtaOnlineLogo" />
                    <h3>Grand Theft Auto Online</h3>
                    <p>Disfruta de la experiencia de GTA Online, un universo dinámico y en constante evolución para hasta 30 jugadores, donde podrás pasar de ser un estafador callejero a convertirte en el capo de tu propio imperio criminal.</p>
                    <p>Disfruta de nuevas mejoras para vehículos de alto rendimiento y la pantalla de selección profesiones. Además, podrás acceder a todas las actualizaciones, expansiones y contenidos de GTA Online publicados desde el lanzamiento, tanto en solitario como con tus amigos. Lleva a cabo elaborados golpes cooperativos, participa en carreras acrobáticas llenas de adrenalina, compite en modos Adversario especiales o pasa el tiempo en espacios sociales como clubes nocturnos, salones recreativos, fiestas en el ático, reuniones automovilísticas y mucho más.</p>
                </div>
                <img className='MainSpects-gtaOnline__img' src={gtaOnline} alt="gtaOnline" />
            </div>
        </div>
    )
}

export default MainSpects