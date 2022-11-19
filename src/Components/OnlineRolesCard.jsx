import React from 'react'

function OnlineRolesCard(props) {
    return (
        <div className='RolesCard-container' >
            
            <div className="bg" style={{backgroundImage:`${props.bg}`}}>
                <span className='title'>{props.title}</span>
                <div className="promo-container">
                    <div className='promo-bg'></div>
                    <img src={props.promo} className='promo'/>
                </div>
            </div>
        </div>
    )
}

export default OnlineRolesCard