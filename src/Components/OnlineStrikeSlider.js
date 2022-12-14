import React from 'react'
import OnlineStrikeCard from './OnlineStrikeCard'
import OnlineDLCCard from './OnlineDLCCard'

import OnlineActivityCayoPericoBackground from '../media/Online-Strike-CayoPerico.jpg'
import OnlineActivityDiamondBackground from '../media/Online-Strike-Diamond.jpg'
import OnlineActivityJudgeBackground from '../media/Online-Strike-Judge.jpg'
import OnlineActivityOriginalBackground from '../media/Online-Strike-Original.jpg'

function OnlineStrikeSlider() {
    function nextButton() {
        let sliderContainer = document.querySelector('.StrikeCards-container');
        sliderContainer.scrollLeft += 600;
        if (window.screen.width < 400) {
            sliderContainer.scrollLeft += 100;
        }
    }
    function prevButton() {
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
            info={'??Atracar el mayor banco del pa??s? Fue pan comido. ??Asaltar las c??maras acorazadas del casino? Tambi??n. ??Infiltrarse en la isla privada y fuertemente protegida del Rubio, el despiadado narcotraficante? Eso ya es otra cosa... Cambia las luces de Los Santos por la arena de Cayo Perico y enfr??ntate al mayor golpe de tu carrera.            Golpe a Cayo Perico es la mayor y m??s ambiciosa aventura de Grand Theft Auto Online hasta la fecha. Podr??s jugarlo de principio a fin tanto en solitario como con hasta tres jugadores m??s. El objetivo ser?? descubrir decenas de formas de infiltrarte y atracar una nueva ubicaci??n para dar un golpe apote??sico. Tu viaje comenzar?? cuando hagas un nuevo contacto en el nuevo sitio de moda de la vida nocturna de Los Santos...'}
            />

            <OnlineStrikeCard
            title={'Golpe a The Diamond Casino'}
            bg={`url(${OnlineActivityDiamondBackground})`}
            info={'Lleva a cabo el robo m??s sofisticado y atrevido jam??s visto en la ciudad de Los Santos en Golpe a The Diamond Casino.   The Diamond Casino & Resort pertenece a los Duggan, una despiadada familia texana de magnates de la industria petroqu??mica que le arrebat?? el control a Tao Cheng y la tr??ada, y que ha hecho que el negocio siga viento en popa, a pesar de su cuestionable capacidad de gesti??n. Ya es hora de hacer algo al respecto de ese mensaje cr??ptico que recibiste de Cheng Family Holdings. Georgina Cheng (vicepresidenta de Cheng Holdings, hermana peque??a del fiestero Tao y m??s equilibrada y formal que este) se ha propuesto dar a los Duggan donde m??s les duele: quiere acceder a la c??mara acorazada de alta seguridad de The Diamond y robar todo lo que contiene.??Ahora que Georgina dirige el cotarro, y que Lester Crest (un hacker muy raro que lidera la operaci??n) y su equipo est??n dispuestos a ayudarla, llevar??n a cabo un ambicioso golpe donde tendr??n que enfrentarse a medidas de seguridad punteras, opciones de preparaci??n casi ilimitadas y un bot??n desmesurado.'}
            />

            <OnlineStrikeCard
            title={'Golpe del Juicio Final'}
            bg={`url(${OnlineActivityJudgeBackground})`}
            info={'Cuando hay tanto en juego, los ??nicos capaces de salvar la situaci??n son los delincuentes m??s desquiciados de los bajos fondos de Los Santos. Los riesgos son descomunales; los enemigos, pr??cticamente imparables... pero las recompensas hacen la boca agua y el subid??n de adrenalina est?? garantizado. Re??ne a tu equipo para vivir la aventura en l??nea m??s espectacular, dividida en tres actos.'}
            />

            <OnlineStrikeCard
            title={'Golpes originales de GTA Online'}
            bg={`url(${OnlineActivityOriginalBackground})`}
            info={'Ya est?? disponible gratis en Grand Theft Auto Online una nueva experiencia cooperativa para 4 jugadores que ofrece la posibilidad de agruparse para llevar a cabo una serie de golpes en varias fases, asaltos y atracos por todo Los Santos y el condado de Blaine.  Planea, prepara y ejecuta: los golpes online son una serie de misiones que introducen nuevos elementos de juego, veh??culos, armas y situaciones. Estas pondr??n a prueba todas las habilidades de los equipos: hackeo de ordenadores, infiltraci??n, precisi??n en la conducci??n (tanto de coches como de aeronaves), punter??a, paracaidismo y m??s. Equipos de 4 jugadores, con 4 maneras de jugar: elegid vuestro papel y planead la estrategia para cada fase del golpe. La comunicaci??n y la coordinaci??n ser??n claves. Algunas misiones requerir??n que el equipo trabaje al un??sono, mientras que otras separar??n a los miembros para completar objetivos clave. Vuelve a jugar cada golpe desde diferentes perspectivas de la acci??n y completa los desaf??os de ??lite para conseguir m??s dinero.'}
            />

        </div>

    </div>
)
}

export default OnlineStrikeSlider