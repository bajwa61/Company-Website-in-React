import React, { Component } from 'react'
import './reading.css';

export default class reading extends Component {
    render() {
        return (
            <div>
                   <a href="https://play.google.com/store/apps/details?id=com.planetreading.readingfriends">
                    <img onMouseOver={this.props.show}
                    onMouseOut={this.props.hide}
                     src="http://newstate.io/wp-content/uploads/2019/07/work-reading-friends-colored.png"
                     alt="" class="we-do-img we-work-img img-responsive grayscale"/>
                     </a>
            </div>
        )
    }
}
