import React, { Component } from 'react'
import './opticare.css';

export default class  extends Component {
    render() {
        return (
            <div>
                <a href="#"> 
                    <img onMouseOut={this.props.hide} onMouseOver={this.props.show} src="http://newstate.io/wp-content/uploads/2019/07/work-opticare-colored.png"
                     alt="" class="we-do-img we-work-img img-responsive grayscale"/></a>
                    </div>
            
        )
    }
}
