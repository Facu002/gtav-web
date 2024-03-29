import {React} from 'react'

import OnlineRolesCard from './OnlineRolesCard'

import OnlineActivityMoneyPromo from '../media/OnlineActivity-money.webp'
import OnlineActivityMoneyBackground from '../media/OnlineActivity-money-background.jpg'

import OnlineActivityVehiclesPromo from '../media/OnlineActivity-vehicles.webp'
import OnlineActivityVehiclesBackground from '../media/OnlineActivity-vehicles-background.jpg'

import OnlineActivityFirearmsPromo from '../media/OnlineActivity-firearms.webp'
import OnlineActivityFirearmsBackground from '../media/OnlineActivity-firearms-background.jpg'

import OnlineActivityNightPromo from '../media/OnlineActivity-night.webp'
import OnlineActivityNightBackground from '../media/OnlineActivity-night-background.jpg'

function OnlineRolesSlider() {

    function nextButton() {
        let sliderContainer = document.querySelector('.RolesCards-container');
        sliderContainer.scrollLeft += 600;
        if (window.screen.width < 400) {
            sliderContainer.scrollLeft += 100;
        }
    }
    function prevButton() {
        // const slideWidth = slide.width;
        let sliderContainer = document.querySelector('.RolesCards-container');
        sliderContainer.scrollLeft -= 600;
        if (window.screen.width < 400) {
            sliderContainer.scrollLeft -= 100;
        }
    }
    
    return (
    <div className='RolesSlider-container'>
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

    <div className='RolesCards-container'>
        <OnlineRolesCard
        title={'Altas Esferas'}
        promo={OnlineActivityMoneyPromo}
        bg={`url(${OnlineActivityMoneyBackground})`}
        info={'Dirige un imperio criminal gigantesco. Contrata a otros jugadores como escoltas y financia tu opulento estilo de vida comerciando con contrabando.'}
        learnMore={'the Gunrunner Guide here'}
        />

        <OnlineRolesCard
        title={'Sobre dos Ruedas'}
        promo={OnlineActivityVehiclesPromo}
        bg={`url(${OnlineActivityVehiclesBackground})`}
        info={'Crea un club de moteros con hasta 7 miembros más. Personaliza la sede, lleva a cabo contratos, dirige negocios ilícitos y compite con clubes rivales para dominar las calles.'}
        learnMore={'our Biker Guide'}
        />

        <OnlineRolesCard
        title={'Traficantes de armas'}
        promo={OnlineActivityFirearmsPromo}
        bg={`url(${OnlineActivityFirearmsBackground})`}
        info={'Domina el mercado del tráfico ilegal de armas del sur de San Andreas en Tráfico de armas. Inicia tu prolífica carrera como traficante de armas con la compra de un búnker en Maze Bank Foreclosures. Estas fortalezas subterráneas serán tu base de operaciones para todas las actividades de tráfico de armas y dispondrán de un terminal informático para que puedas conectarte a la red de Disruption Logistics.'}
        learnMore={'the Gunrunner Guide here'}
        />

        <OnlineRolesCard
        title={'Vida nocturna'}
        promo={OnlineActivityNightPromo}
        bg={`url(${OnlineActivityNightBackground})`}
        info={'Abre un club nocturno y conviértelo en el lugar de fiesta favorito de la ciudad para utilizarlo como fachada para gestionar otros negocios más turbios. Ideal si quieres expandir tu emporio en el futuro.'}
        learnMore={'the Nightclub Owner Guide'}
        />
        

    </div>

    </div>
)
}

export default OnlineRolesSlider