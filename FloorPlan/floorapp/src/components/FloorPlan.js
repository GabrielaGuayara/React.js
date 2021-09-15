import React from 'react'
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

const FloorPlan = () => {
    return (
    <div className='ctn'>
    <div className='row1'>
        <div className='BedandBath'>
        <Bedroom  bedNum={1}/>
        <Bath size='Full'/>
        </div>
        <LivingRoom/>
        <Kitchen/>
     </div>
     <div className='row2'>
        <Bedroom bedNum={2}/>
        <Bath size='Half'/>
        <Bedroom bedNum={3}/>
     </div>
    </div>
    )
}

export default FloorPlan
