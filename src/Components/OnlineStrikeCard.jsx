import React from 'react'

function OnlineStrikeCard(props) {
    return (
        <div className='StrikeCard-container' >
            
                <span className='title'>{props.title}</span>
            <div className="bg" style={{backgroundImage:`${props.bg}`}}>

                <div className="promo-container">
                    <div className='promo-bg'></div>
                    {/* <img src={props.promo} className='promo'/> */}
                </div>
            </div>
        </div>
    )
}

export default OnlineStrikeCard