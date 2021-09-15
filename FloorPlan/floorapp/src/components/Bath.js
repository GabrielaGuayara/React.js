import React from 'react'

const FullBath = (props) => {
    return (
        <div id= {`bath-${props.size}`} >
           <h2> {props.size} Bath</h2>
        </div>
    )
}

export default FullBath
