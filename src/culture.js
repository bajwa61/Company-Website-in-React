import React, { Component } from 'react'
import './culture.css'

export default class culture extends Component {
    render() {
        return (
            <div className="container-fluid c-header">
                <div className="col-lg-6" style={{overFlow:'hidden'}}>
                    <div className="text-start">
                        <h2 style={{marginTop:'170px'}} id="section-heading">Integrity, Quality, Responsibility</h2>
                        <p id="section-text">We have a culture based on good human traits and we encourage everyone
                         to adopt them. Moreover to deliver their best, 
                        focus on collective well-being and most importantly to think beyond themselves. To develop a 
                        sense of comradeship amongst the fellow colleagues. To take responsibility of the work and to keep on accumulating 
                        knowledge to expand ones vision</p>
                        <a id="anchor"href="http://newstate.io/wp-content/uploads/2019/07/Booklet.pdf">Download Brand Book</a>
                    </div>
                </div>
                
            </div>
        )
    }
}
