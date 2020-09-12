import React, { Component } from 'react'
import Menu from './menu';
import './home.css';

export default class home extends Component {
    constructor(props){
        super(props);
        this.state={
         show:false
        }
      }
      handleMenu=()=>{
        this.setState={
          show:!this.state.show
        }
      }
    render() {
        return (
            <div id="home">
               <Menu/>
               <div className="container-fluid">
                   <div className="row d-flex justify-content-end">
                       <div className="col-lg-6 col-md-6  col-offset-6 justify-content-center">
                           <div className=" text-left">
                               <h1 id="new-state-heading">NEW STATE</h1>
                           
                           
                           <p id="paraghraph"> New State strives to make this world eco-friendly &nbsp;energy &nbsp;efficient<br/> and
                                prosperous through sustainable solutions, 
                               using digitization as<br/> a vessel to meet the ends. </p>
                        
                           </div>
                           
                       </div>

                   </div>
               </div>
            </div>
        )
    }
}


