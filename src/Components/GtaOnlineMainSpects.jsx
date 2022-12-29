import React from 'react'
import OnlineDLCSlider from './OnlineDLCSlider.js'
import OnlineRolesSlider from './OnlineRolesSlider.js'
import OnlineStrikeSlider from './OnlineStrikeSlider.js'
import DLCSlider from './DLCSlider.js'
function GtaOnlineMainSpects() {
    return (
        <div className='MainSpects-container'>

            <OnlineDLCSlider/>
            {/* <DLCSlider/> */}
            <OnlineRolesSlider/>
            <OnlineStrikeSlider/>
        </div>
    )
}

export default GtaOnlineMainSpects