import React, { Component } from 'react'


import NavBar from './navbar';
import './menu.css'
import Toggle from './toggle';
import 'bootstrap/dist/css/bootstrap.css';
export default class menu extends Component {

  
constructor(props){
  super(props);
  this.state={
    show:false
  }
}
handleMotion=()=>{
  this.setState({
    show:!this.state.show
  })
}

 
    render() {
      
        return (
          
            <div className="sidenav">
              <ul>
                <li className="logo">
                <div className="d-flex justify-content-start">
                      <div className="  justify-content-start">
                      <a href="#">
                    <img className="sticky" src="http://newstate.io/wp-content/uploads/2019/06/newstate_logo-1.png" alt="newstate logo" style={{maxWidth:'50px'}}/>
                  </a>
                      </div>
                      </div> 
                </li>
                <li>
                <NavBar
                   show={this.state.show}
                   
                   />
                </li>
                <li className="hamburger">
                <div >
                    <Toggle
                    show={this.handleMotion}
                    copy={this.state.show}
                    />
                      </div>
                    
                </li>
              </ul>
            </div>
          
           
              
                   

                
       
           
        )
    }
}

