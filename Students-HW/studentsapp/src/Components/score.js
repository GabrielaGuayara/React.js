import React, { Component } from 'react'

export default class score extends Component {
    render() {
        return (

            <tr>
                <td>{this.props.scores.score}</td>
                <td>{this.props.scores.date}</td>
            </tr>


        )
    }
}
