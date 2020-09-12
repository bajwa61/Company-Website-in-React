import React, { Component } from 'react'
import './toggle.css';

export default class toggle extends Component {
 
    render() {
        let className='toggle-switch';
        if(this.props.copy){
            className='toggle-switch changes';
        }
        return (
            <div className={className} onClick={this.props.show}>
                <span className="bars1"></span>
                <span className="bars2"></span>
                <span className="bars3"></span>
                
            </div>
        )
        }
}
