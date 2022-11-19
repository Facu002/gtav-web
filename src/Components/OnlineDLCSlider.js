import React from 'react'
import OnlineDLCCard from './OnlineDLCCard'
// import sliderAnimation from './sliderAnimation.js'

import OnlineCrimEnterLogo from '../media/Online-crimEnterp-Logo.svg'
import OnlineCrimEnterPromo from '../media/Online-crimEnterp-promoImg.png'
import OnlineCrimEnterPromoMobile from '../media/Online-crimEnterp-promoImg-mb.png'
import OnlineCrimEnterBackground from '../media/Online-crimEnterp-background.jpg'

import OnlineContractLogo from '../media/Online-contract-Logo.png'
import OnlineContractPromo from '../media/Online-contract-promoImg.png'
import OnlineContractPromoMobile from '../media/Online-contract-promoImg-mb.png'
import OnlineContractBackground from '../media/Online-contract-background.jpg'

import OnlineTunersLogo from '../media/Online-tuners-Logo.png'
import OnlineTunersPromo from '../media/Online-tuners-promoImg.png'
import OnlineTunersPromoMobile from '../media/Online-tuners-promoImg-mb.png'
import OnlineTunersBackground from '../media/Online-tuners-background.jpg'

import OnlineCayoPericoLogo from '../media/Online-CayoPerico-Logo.svg'
import OnlineCayoPericoPromo from '../media/Online-CayoPerico-promoImg.png'
import OnlineCayoPericoPromoMobile from '../media/Online-CayoPerico-promoImg-mb.png'
import OnlineCayoPericoBackground from '../media/Online-CayoPerico-background.jpg'

import OnlineDiamondLogo from '../media/Online-Diamond-Logo.svg'
import OnlineDiamondPromo from '../media/Online-Diamond-promoImg.png'
import OnlineDiamondPromoMobile from '../media/Online-Diamond-promoImg-mb.png'
import OnlineDiamondBackground from '../media/Online-Diamond-background.jpg'

function OnlineDLCSlier() {
  
  
  let sliderContainer = document.querySelector('.card-container');
  let slide = document.querySelector('.DlcCard-container');
  let index = 0
  
    function nextButton() {
      // const slideWidth = slide.width;
      let sliderContainer = document.querySelector('.DlcCards-container');
      sliderContainer.scrollLeft += 600;
      if (window.screen.width < 400) {
        sliderContainer.scrollLeft += 100;
        
      }
    }
    function prevButton() {
      // const slideWidth = slide.width;
      let sliderContainer = document.querySelector('.DlcCards-container');
      sliderContainer.scrollLeft -= 600;
      if (window.screen.width < 400) {
        sliderContainer.scrollLeft -= 100;
      }
    }

  return (
    <div className='DlcSlider-container'>
      <div className='slider-text-container'>
        <h4>Carreras delictivas</h4>
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
              id='next'
              onClick={nextButton}
              className="icon icon-tabler icon-tabler-arrow-right" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
          </>
        </div>

      </div>

      <div className='DlcCards-container'>
        <OnlineDLCCard 
        title={'The Criminal Enterprises'}
        logo={OnlineCrimEnterLogo}
        promo={OnlineCrimEnterPromo}
        promoMobile={OnlineCrimEnterPromoMobile}
        bg={`url(${OnlineCrimEnterBackground})`}
        />
        <OnlineDLCCard 
        title={'The Contract'}
        logo={OnlineContractLogo}
        promo={OnlineContractPromo}
        promoMobile={OnlineContractPromoMobile}
        bg={`url(${OnlineContractBackground})`}
        />
        <OnlineDLCCard 
        title={'Los Santos Tuners'}
        logo={OnlineTunersLogo}
        promo={OnlineTunersPromo}
        promoMobile={OnlineTunersPromoMobile}
        bg={`url(${OnlineTunersBackground})`}
        />
        <OnlineDLCCard 
        title={'Golpe a Cayo Perico'}
        logo={OnlineCayoPericoLogo}
        promo={OnlineCayoPericoPromo}
        promoMobile={OnlineCayoPericoPromoMobile}
        bg={`url(${OnlineCayoPericoBackground})`}
        />
        <OnlineDLCCard 
        title={'The Diamond Casino & Resort'}
        logo={OnlineDiamondLogo}
        promo={OnlineDiamondPromo}
        promoMobile={OnlineDiamondPromoMobile}
        bg={`url(${OnlineDiamondBackground})`}
        />
        {/* <OnlineDLCCard />
        <OnlineDLCCard />
        <OnlineDLCCard /> */}
      </div>
    </div>
  )
}

export default OnlineDLCSlier