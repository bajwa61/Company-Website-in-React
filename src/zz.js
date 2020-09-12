import React, { Component } from 'react'
import './zz.css';

export default class zz extends Component {
    render() {
        return (
            <div>
                 <a href="http://zz-intl.com">               
                             <img onMouseOver={this.props.show} 
                             onMouseOut={this.props.hide}src="http://newstate.io/wp-content/uploads/2019/07/work-zz-colored.png" alt="" class="we-do-img we-work-img img-responsive grayscale"/>
                             </a>
            </div>
        )
    }
}
