import React from 'react'

import bannerImg from '../media/banner.jpg'
import gtaonline from '../media/gtaOnline.svg'
function Banner() {
    return (
        <div className='banner-container__online'>
            <div>
                <div className="bannerImg-background"></div>
                <div className="bannerImg-frontImg"></div>
                <div className="bannerText-container">
                    <div className='bannerText-container__logos'>
                        <img src={gtaonline} alt="" />
                    </div>
                    <div className="bannerText-container__title">
                        <h1>Grand Theft Auto Online</h1>
                        <p>Disfruta tanto en solitario como con tus amigos de la experiencia en GTA Online, un universo dinámico y en constante evolución para hasta 30 jugadores que incluye todas las mejoras y contenidos existentes publicados desde el lanzamiento.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner