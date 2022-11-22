import {React, useState, useEffect} from 'react'


function OnlineRolesCard(props) {
    const [toggle, setToggle] = useState(false)

    // useEffect(() => {
    // console.log(toggle);
    // return () => {
    //     console.log('ok');
    // }
    // }, [toggle])
    
    return (
        <>
        <div className='RolesCard-container' onClick={()=>setToggle(!toggle)}>
            
            <div className="bg" style={{backgroundImage:`${props.bg}`}}>
                <span className='title'>{props.title}</span>
                <div className="promo-container">
                    <div className='promo-bg'></div>
                    <img src={props.promo} className='promo'/>
                </div>
            </div>
        </div>
        {
            toggle
            ? 
            <div className='modal'>
                <div className="modal-content">
                    <div className="left" >
                        <img src={props.promo} className='promo'/>
                        <div className="container-promo" style={{backgroundImage:`${props.bg}`}}>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={()=>setToggle(!toggle)}>X</button>

                        <div className="container-text">
                        <div>
                            <span>Carreras delictivas</span>
                            <h3>{props.title}</h3>
                            <p>{props.info}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            : null
        }
        </>

    )
}

export default OnlineRolesCard