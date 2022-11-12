import React from 'react'
import css from './style/style.css'
import Nav from './Components/Nav'
import Main from './Components/Main'
import GameCard from './Components/GameCard'
import GameCard2 from './Components/GameCard2'
import GameCardBtn from './Components/GameCardBtn.js'

import gtaOnlineThumb from './media/gtaOnline_thumb.jpg'
import gtaVThumb from './media/gtav_thumb.jpg'
import gtaonlineBackground from './media/GCbackground_gtaonline.jpg'
import gtavBackground from './media/GCbackground_gtav.jpg'
function Home() {
    return (
    <>
        <Nav />
        <Main/>
        <div className='GamePurchase-container'>

        <div className="GamePurchase-text">
            <h3>Comprar ahora</h3>
            <div className='GameCardBtn'>
                <GameCardBtn />
            </div>
        </div>

            <div className='Cards'>
            <GameCard
                backgroundImage={gtaonlineBackground}
                thumbImg={gtaOnlineThumb}
                cardTitle={'Grand Theft Auto Online'}
                gameContent={['Incluye ', <b>GTA Online</b>]}
            />
            <GameCard2
                backgroundImage={gtavBackground}
                thumbImg={gtaVThumb}
                cardTitle={'Grand Theft Auto V'}
                gameContent={['Incluye el  ', <b>modo Individual de GTA V</b>,' y ',<b>GTA Online</b>]}
            />

            </div>

        </div>
    </>
)
}

export default Home