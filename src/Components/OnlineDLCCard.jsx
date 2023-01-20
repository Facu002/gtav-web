import {React, useState} from 'react'

function OnlineDLCCard(props) {
    const [toggle, setToggle] = useState(false)

    return (
        <>
        {
            window.screen.width > 830
            ? 
            <div className='DlcCard-container' style={{backgroundImage:`${props.bg}`}} onClick={()=>setToggle(!toggle)}>
                <img src={props.logo} className="logo"/>
                <span className='title'>{props.title}</span>
                <div className="promo-container">
                    <div className='promo-bg'></div>
                    <img src={props.promo} className='promo'/>
                </div>
            </div>
            : 
            <div className='DlcCard-container DlcCard-container--mb'>
                <div className="bg" style={{backgroundImage:`${props.bg}`}} onClick={()=>setToggle(!toggle)}>
                    <img src={props.logo} className="logo"/>
                    <span className='title'>{props.title}</span>
                    <div className="promo-container">
                        <div className='promo-bg'></div>
                        <img src={props.promoMobile} className='promo'/>
                    </div>
                </div>
            </div>
        }
        {
            toggle
            && (
                <div className='DlcCard-container-Modal' >
                    <div className="wrap">

                    <div className="container">
                    <button className='close-btn'  onClick={()=>setToggle(!toggle)}>X</button>
                    
                    <div className="modal-banner">
                        <img src={props.logo} className="logo"/>
                        <div className="promo-container"  style={{backgroundImage:`${props.bg}`}}>
                            <div className="promo-container">
                            <img src={props.promo} className='promo'/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-text">
                        <div className="text-container">
                            <span>Actualizaciones del juego</span>
                            <h4 className='title'>{props.title}</h4>
                            {props.text}
                        </div>
                    </div>

                    </div>
                    
                    </div>
                
                </div>
            )
            
        }
        </>

    )
}

export default OnlineDLCCard