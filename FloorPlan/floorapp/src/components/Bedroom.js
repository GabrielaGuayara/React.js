import React from 'react'

const Bedroom = (props) => {
    return (
        <div className='bedroom' id={`bed-${props.bedNum}`}>
            <h2>Bedroom {props.bedNum}</h2>
        </div>
    )
}

export default Bedroom
