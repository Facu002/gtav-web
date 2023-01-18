import {React, useState, useEffect} from 'react'
// import { motion, AnimatePresence } from "framer-motion";


function OnlineStrikeCard(props) {
    const [toggle, setToggle] = useState(false)
    
    // const item = {
    //     visible: { opacity: [0,0,1], x: 0, transition: {duration: 0.3,stiffness: 1}},
    //     hidden: { opacity: [0,0,0], x: [-500, -500, 0], transition: {duration: 1,stiffness: 1}},
    // }
    return (
        <>
        <div className='StrikeCard-container' onClick={()=>setToggle(!toggle)}>
            
                <span className='title'>{props.title}</span>
            <div className="bg" style={{backgroundImage:`${props.bg}`}}>

                <div className="promo-container">
                    <div className='promo-bg'></div>
                    {/* <img src={props.promo} className='promo'/> */}
                </div>
            </div>
        </div>
        {
            toggle
            &&(
            // <AnimatePresence  variants={item} initial="visible" animate="hidden">
                
            <div className='modal'>
                <div className="modal-content"
                // initial={{ opacity: 1,  scale: 0.9}}
                // animate={{
                // opacity: 1,
                // // x: [0, -50, 0],
                // scale: 1,
                // transition: { type: "spring", stiffness: 100, duration: 1}}}
                // exit={{ opacity: 0}}
                // viewport={{ once: false }}
                >
                    <div  className="left" 
                    // initial={{ opacity: 1, scale:0.5}}
                    // animate={{
                    // opacity: 1,
                    // y: 0,
                    // scale: 1,
                    // transition: {duration: 0.2,stiffness: 1}
                    // }}
                    // exit={{ opacity: 0}}   
                    >
                        <div className="container-promo" style={{backgroundImage:`${props.bg}`}}>
                        </div>
                    </div>

                    <div className="right" 
                    // initial="hidden" animate="visible" variants={item}
                    > 
                        
                        <button className='close-btn' onClick={()=>setToggle(!toggle)}>X</button>

                        <div className="container-text"
                        // variants={item}
                        // initial={{ opacity: 0}}
                        // animate={{
                        // opacity: 1,
                        // x: [-500, 0],
                        // scale: 1,
                        // transition: {duration: 1,stiffness: 1}}}
                        // exit={{ opacity: 0}} 
                        >
                        <div>
                            <span>Carreras delictivas</span>
                            <h3>{props.title}</h3>
                            <p>{props.info}</p>
                            
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

export default OnlineStrikeCard