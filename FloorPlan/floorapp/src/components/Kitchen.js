import React from 'react'
import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
    return (
        <div className='kitchen'>
            <div className='ovenandsink'>
            <Oven/>
            <Sink/>
            </div>
            <h2> Kitchen</h2>
        </div>
    )
}

export default Kitchen