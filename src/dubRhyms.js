import React, { Component } from 'react'
import './dubRhyms.css';

export default class dubRhyms extends Component {
    render() {
        return (
            <div>
                 <a href="https://apps.apple.com/us/app/dub-rhyme/id1057217614?ign-itscg=0177&ign-itsct=1057217614-1057217614">
                    <img onMouseOver={this.props.show}
                    onMouseOut={this.props.hide}src="http://newstate.io/wp-content/uploads/2019/08/dubrhymes.png"
                     alt="" class="we-do-img we-work-img img-responsive grayscale"/>
                     </a>
            </div>
        )
    }
}
