import React, { Component } from 'react'
import './navbar.css';
import Particles from 'react-particles-js'
export default class navbar extends Component {
     particlesOpt={
         particles:{
             number:{
                 value:50,
                 density:{
                     enable:true,
                     value_area:800
                 }
             }
         }

    }
    render() {
       let particlesOpt={
        particles: {
	        number: {
	            value: 125
	        },
	        size: {
	            value: 3
	        }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: 'repulse',
	            }
	        }
	    }
   
       }
        let className='navbar-container';
        if(this.props.show){
            className='navbar-container open';
        }
        return (
            <div className={className}>
               
                <ul>
                    <li><a href="http://newstate.io/wp-content/uploads/2019/07/Booklet.pdf"><span className="menu-text">BRAND BOOk</span></a></li>
                    <li><a href="http://newstate.io/wp-content/uploads/2019/08/Brochure-1.2.pdf"><span className="menu-text">BROCHURE</span></a></li>
                </ul>
               
                <Particles
                params={particlesOpt}
                style={{position:'fixed',top:'0'}}
                />
            </div>
        )
    }
}
