import React from 'react'

import bannerImg from '../media/banner.jpg'
import gtav from '../media/cc4b8d5c455ccb92dc0c.svg'
import gtaonline from '../media/gtaOnline.svg'
function Banner() {
    return (
        <div className='banner-container'>
            <div>
                <div className="bannerImg-background"></div>
                <div className="bannerText-container">
                    <div className='bannerText-container__logos'>
                        <img src={gtav} alt="" />
                        <img src={gtaonline} alt="" />
                    </div>
                    <div className="bannerText-container__title">
                        <h1>Ya disponibles para PlayStation®5 y Xbox Series X|S</h1>
                        <p>Disfruta de los superventas del entretenimiento Grand Theft Auto V y GTA Online.</p>
                    </div>
                    <div className="bannerText-container__btns">
                    <button>Ver el tráiler</button>
                    <button>Comprar ahora</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner