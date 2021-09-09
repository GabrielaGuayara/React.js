import React, { Component } from 'react'
import Score from './score'

export default class Student extends Component {
    render() {
        return (
            
                <div className='std'>

                    <h6 className='inner_std'>
                        {this.props.student.name}
                    </h6>

                    <div className='inner_std'>
                        <p>{this.props.student.bio}</p>
                    </div>

                    <table className='tab'>
                    <tr>
                        <th>Score</th>
                        <th>Date</th>
                     </tr>
                        {this.props.student.scores.map((scores, index) => (<Score scores= {scores} key={index}/>))}
                     </table>

                </div>
            
        )
    }
}
