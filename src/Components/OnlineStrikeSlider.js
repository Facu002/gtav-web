import React from 'react'
import OnlineStrikeCard from './OnlineStrikeCard'
import OnlineDLCCard from './OnlineDLCCard'

import OnlineActivityCayoPericoBackground from '../media/Online-Strike-CayoPerico.jpg'
import OnlineActivityDiamondBackground from '../media/Online-Strike-Diamond.jpg'
import OnlineActivityJudgeBackground from '../media/Online-Strike-Judge.jpg'
import OnlineActivityOriginalBackground from '../media/Online-Strike-Original.jpg'

function OnlineStrikeSlider() {
    function nextButton() {
        // const slideWidth = slide.width;
        let sliderContainer = document.querySelector('.StrikeCards-container');
        sliderContainer.scrollLeft += 600;
        if (window.screen.width < 400) {
            sliderContainer.scrollLeft += 100;
        }
    }
    function prevButton() {
        // const slideWidth = slide.width;
        let sliderContainer = document.querySelector('.StrikeCards-container');
        sliderContainer.scrollLeft -= 600;
        if (window.screen.width < 400) {
            sliderContainer.scrollLeft -= 100;
        }
    }

    return (
    <div className='StrikeSlider-container'>
        <div className='slider-text-container'>
        <h4>Actualizaciones del juego</h4>
            <div className='slider-btn-container'>
            <>
                <svg xmlns="http://www.w3.org/2000/svg" 
                onClick={prevButton}
                id='prev'
                className="icon icon-tabler icon-tabler-arrow-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </>
            <>
                <svg xmlns="http://www.w3.org/2000/svg" 
                onClick={nextButton}
                id='next'
                className="icon icon-tabler icon-tabler-arrow-right" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
            </>
            </div>
        </div>

        <div className='StrikeCards-container'>
            <OnlineStrikeCard
            title={'Golpe a Cayo Perico'}
            bg={`url(${OnlineActivityCayoPericoBackground})`}
            info={'¿Atracar el mayor banco del país? Fue pan comido. ¿Asaltar las cámaras acorazadas del casino? También. ¿Infiltrarse en la isla privada y fuertemente protegida del Rubio, el despiadado narcotraficante? Eso ya es otra cosa... Cambia las luces de Los Santos por la arena de Cayo Perico y enfréntate al mayor golpe de tu carrera.            Golpe a Cayo Perico es la mayor y más ambiciosa aventura de Grand Theft Auto Online hasta la fecha. Podrás jugarlo de principio a fin tanto en solitario como con hasta tres jugadores más. El objetivo será descubrir decenas de formas de infiltrarte y atracar una nueva ubicación para dar un golpe apoteósico. Tu viaje comenzará cuando hagas un nuevo contacto en el nuevo sitio de moda de la vida nocturna de Los Santos...'}
            />

            <OnlineStrikeCard
            title={'Golpe a The Diamond Casino'}
            bg={`url(${OnlineActivityDiamondBackground})`}
            info={'Lleva a cabo el robo más sofisticado y atrevido jamás visto en la ciudad de Los Santos en Golpe a The Diamond Casino.   The Diamond Casino & Resort pertenece a los Duggan, una despiadada familia texana de magnates de la industria petroquímica que le arrebató el control a Tao Cheng y la tríada, y que ha hecho que el negocio siga viento en popa, a pesar de su cuestionable capacidad de gestión. Ya es hora de hacer algo al respecto de ese mensaje críptico que recibiste de Cheng Family Holdings. Georgina Cheng (vicepresidenta de Cheng Holdings, hermana pequeña del fiestero Tao y más equilibrada y formal que este) se ha propuesto dar a los Duggan donde más les duele: quiere acceder a la cámara acorazada de alta seguridad de The Diamond y robar todo lo que contiene. Ahora que Georgina dirige el cotarro, y que Lester Crest (un hacker muy raro que lidera la operación) y su equipo están dispuestos a ayudarla, llevarán a cabo un ambicioso golpe donde tendrán que enfrentarse a medidas de seguridad punteras, opciones de preparación casi ilimitadas y un botín desmesurado.'}
            />

{/* 
            <OnlineDLCCard 
            title={'Golpe a The Diamond Casino'}
            bg={`url(${OnlineActivityDiamondBackground})`}

            /> */}

            <OnlineStrikeCard
            title={'Golpe del Juicio Final'}
            bg={`url(${OnlineActivityJudgeBackground})`}
            info={'Cuando hay tanto en juego, los únicos capaces de salvar la situación son los delincuentes más desquiciados de los bajos fondos de Los Santos. Los riesgos son descomunales; los enemigos, prácticamente imparables... pero las recompensas hacen la boca agua y el subidón de adrenalina está garantizado. Reúne a tu equipo para vivir la aventura en línea más espectacular, dividida en tres actos.'}
            />

            <OnlineStrikeCard
            title={'Golpes originales de GTA Online'}
            bg={`url(${OnlineActivityOriginalBackground})`}
            info={'Ya está disponible gratis en Grand Theft Auto Online una nueva experiencia cooperativa para 4 jugadores que ofrece la posibilidad de agruparse para llevar a cabo una serie de golpes en varias fases, asaltos y atracos por todo Los Santos y el condado de Blaine.  Planea, prepara y ejecuta: los golpes online son una serie de misiones que introducen nuevos elementos de juego, vehículos, armas y situaciones. Estas pondrán a prueba todas las habilidades de los equipos: hackeo de ordenadores, infiltración, precisión en la conducción (tanto de coches como de aeronaves), puntería, paracaidismo y más. Equipos de 4 jugadores, con 4 maneras de jugar: elegid vuestro papel y planead la estrategia para cada fase del golpe. La comunicación y la coordinación serán claves. Algunas misiones requerirán que el equipo trabaje al unísono, mientras que otras separarán a los miembros para completar objetivos clave. Vuelve a jugar cada golpe desde diferentes perspectivas de la acción y completa los desafíos de élite para conseguir más dinero.'}
            />

        </div>

    </div>
)
}

export default OnlineStrikeSlider