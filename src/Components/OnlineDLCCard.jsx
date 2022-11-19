import React from 'react'

function OnlineDLCCard(props) {
    return (
        <>
        {
            window.screen.width > 830
            ? 
            <div className='DlcCard-container' style={{backgroundImage:`${props.bg}`}}>
                <img src={props.logo} className="logo"/>
                <span className='title'>{props.title}</span>
                <div className="promo-container">
                    <div className='promo-bg'></div>
                    <img src={props.promo} className='promo'/>
                </div>
            </div>
            : 
            <div className='DlcCard-container DlcCard-container--mb'>
                <div className="bg" style={{backgroundImage:`${props.bg}`}}>
                    <img src={props.logo} className="logo"/>
                    <span className='title'>{props.title}</span>
                    <div className="promo-container">
                        <div className='promo-bg'></div>
                        <img src={props.promoMobile} className='promo'/>
                    </div>
                </div>
            </div>
        }
        </>

    )
}

export default OnlineDLCCard