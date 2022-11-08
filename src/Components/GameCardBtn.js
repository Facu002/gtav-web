import {React, useEffect} from 'react'

function GameCardBtn() {

    function moveGameCardToLeft() {
        let cards = document.querySelector('.Cards')
        
        cards.style.transform = 'translateX(0)'
        cards.style.transition = 'all 0.8s'
        // console.log(cards);
        // cards.scrollLeft += 500;
    }
    function moveGameCardToRight() {
        let cards = document.querySelector('.Cards')
        let cardsBtn = document.querySelector('.GameCardBtn')
        
        // if (window.screen.width <= 800) {
        //     cards.style.transform = 'translateX(-25%)'
        //     cards.style.transition = 'all 0.8s'
        // }
        // if (window.screen.width <= 1000) {
        //     cardsBtn.style.display = 'none'
        // }
        if (window.screen.width <= 800) {
            cards.style.transform = 'translateX(-50%)'
            cards.style.transition = 'all 0.8s'
        }
        if (window.screen.width <= 600) {
            cards.style.transform = 'translateX(-50%)'
            cards.style.transition = 'all 0.8s'
        }
    }

    
    return (
        <div>
        <>
            <svg xmlns="http://www.w3.org/2000/svg" 
            onClick={moveGameCardToLeft}
            class="icon icon-tabler icon-tabler-arrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
        </>
        <>
            <svg xmlns="http://www.w3.org/2000/svg" 
            onClick={moveGameCardToRight}
            class="icon icon-tabler icon-tabler-arrow-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
        </svg>
        </>
    </div>
    )
}

export default GameCardBtn