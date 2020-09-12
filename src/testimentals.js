import React, { Component } from 'react'
import './testimentals.css';

export default class testimentals extends Component {
    render() {
        return (
            <div className="container-fluid khatau">
                <div style={{paddingLeft:'60px',paddingRight:'60px'}}>
                <div className="row">
                    <div className="col-lg-6 col-sm-6 cl-6">
                        <h2 id="khatau-heading">
                        Khatau Software Ltd.
                        </h2>
                        <p id="khatau-content">

                        "We have had an excellent relation with New State being our 
                        software development outsourcing and consulting partner for over 
                        two (02) years. Communication has been a key factor in the success 
                        of this partnership. We have been able to rely on the technical 
                        competency of the New State team assigned to our projects. Advice
                         given to us throughout the project lifecycle has seen to better 
                         design choices, overall direction and timely completion."</p>
                         <h4 id="name-khatau">Mohamedmehdi Khatau</h4>
                         <p id="post">Managing Director</p>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
