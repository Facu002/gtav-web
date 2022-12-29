import {React, useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";

function OnlineRolesCard(props) {
    const [toggle, setToggle] = useState(false)

    // useEffect(() => {
    // console.log(toggle);
    // return () => {
    //     console.log('ok');
    // }
    // }, [toggle])
    
const item = {
    visible: { opacity: [0,0,1], x: 0, transition: {duration: 0.3,stiffness: 1}},
    hidden: { opacity: [0,0,0], x: [-500, -500, 0], transition: {duration: 1,stiffness: 1}},
}
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
            && (
                
            <AnimatePresence  variants={item} initial="visible" animate="hidden">
                
            <motion.div className='modal'>
                <motion.div className="modal-content"
                initial={{ opacity: 1,  scale: 0.9}}
                animate={{
                opacity: 1,
                // x: [0, -50, 0],
                scale: 1,
                transition: { type: "spring", stiffness: 100, duration: 1}}}
                exit={{ opacity: 0}}
                viewport={{ once: false }}
                >
                    <motion.div  className="left" 
                    initial={{ opacity: 1, scale:0.5}}
                    animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {duration: 0.2,stiffness: 1}
                    }}
                    // exit={{ opacity: 0}}   
                    >
                        <img src={props.promo} className='promo'/>
                        <div className="container-promo" style={{backgroundImage:`${props.bg}`}}>
                        </div>
                    </motion.div>

                    <motion.div className="right" initial="hidden" animate="visible" variants={item}> 
                        
                        <button className='close-btn' onClick={()=>setToggle(!toggle)}>X</button>

                        <motion.div className="container-text"
                        variants={item}
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
                            <div className="learnMoreBox">
                                <span>Read {props.learnMore} to learn more.</span>
                                <a href="#">learn more
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="13" y1="18" x2="19" y2="12" />
                                    <line x1="13" y1="6" x2="19" y2="12" />
                                </svg>
                                </a>
                            </div>
                        </div>
                        
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>

            </AnimatePresence>
            ) 
        }
        </>

    )
}

export default OnlineRolesCard