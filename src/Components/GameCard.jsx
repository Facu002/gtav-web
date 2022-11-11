import {React, useState} from 'react'
import xboxxs from '../media/xboxxs.svg'
import ps5 from '../media/ps5.svg'
function GameCard(props) {
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
    <div className='GameCard-container'>
        <img src={props.backgroundImage} alt="" className="GameCard-backgroundImg" />
        <img src={props.thumbImg} className="GameCard-gameThumbnail" />

        <div className={isActive ? "GameCard-text__hidden" : "GameCard-text"}>
            <h1 className="GameCard-text__title">{props.cardTitle}</h1>
            <span className="GameCard-text__content">{props.gameContent}</span>
            <div className="GameCard-text__platforms">
                <img src={ps5} alt="ps5" />
                <img src={xboxxs} alt="xbox" />
            </div>
            <span className='GameCard-text__info'>Mejora del modo Individual disponible en el juego</span>
        </div>
        
        <div className={isActive ? 'GameCard__btn GameCard__btn-select' : 'GameCard__btn'} onClick={toggleClass}>
            <span>Elegir plataforma</span>
            {
                isActive 
                ? <div className="select-box">
                    <button className='sony-btn'>
                        <img src={ps5} alt="ps5" />
                    </button>
                    <button className='microsoft-btn'>
                        <img src={xboxxs} alt="xboxxs" />
                    </button>
                    <span onClick={toggleClass}>X</span>
                </div>
                : <div className="select-box">
                    <></>
                </div>
            }
        </div>
    </div>
    )
}

export default GameCard