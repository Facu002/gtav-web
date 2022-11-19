import React from 'react'
import OnlineStrikeCard from './OnlineStrikeCard'

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
            title={'Altas Esferas'}
            bg={`url(${OnlineActivityCayoPericoBackground})`}/>
            <OnlineStrikeCard
            title={'Altas Esferas'}
            bg={`url(${OnlineActivityDiamondBackground})`}/>
            <OnlineStrikeCard
            title={'Altas Esferas'}
            bg={`url(${OnlineActivityJudgeBackground})`}/>
            <OnlineStrikeCard
            title={'Altas Esferas'}
            bg={`url(${OnlineActivityOriginalBackground})`}/>

        </div>

    </div>
)
}

export default OnlineStrikeSlider