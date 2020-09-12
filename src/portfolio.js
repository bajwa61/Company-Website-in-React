import React, { Component } from 'react'
import './portfolio.css';
import Reading from './reading';
import Opticare from './opticare';
import DubRhyms from './dubRhyms';
import Zz from './zz';



export default class portfolio extends Component {
   
    constructor(props){
        super(props);
        this.state={
            
            heading:"",
            parah:"",
            parah2:"",
            parah3:"",
            parah4:""
            
        
        }
        
        this.handleDiscription = this.handleDiscription.bind(this);
    }
    
    handleDiscription = () => {
        this.setState({
            heading:"Reading Friends",
            parah:"Reading Friends is designed to engage young children by promoting interactive learning through ",
            parah2:"games, puzzles, and music. Appealing to children's instinctual inquisitiveness, Reading Friends",
            parah3:"brings education to life with exciting graphics, spirited sound and creative activities that help",
            parah4:"them learn to read, while entertaining them through play."
        });
    }
    leave=()=>{
        this.setState({
            heading:null,
            parah:null,
            parah2:null,
            parah3:null,
            parah4:null
        });
    }
    handleOpti=()=>{
        this.setState({
            heading:"OptiCare Solution",
            parah:"OptiCare Solution is a complete mini ERP for opticians and optometrists. We are the first to ",
            parah2:"bring such an extensive solution in the field of Optometry, providing features that are robust ",
            parah3:"and easy to use.",
            parah4:""
        });
    }
    handleCare=()=>{
        this.setState({
            heading:null,
            parah:null,
            parah2:null,
            parah3:null,
            parah4:null
        });
    }
    handleDub=()=>{
        this.setState({
            heading:"Dub Rhymes",
            parah:"Bring the love of karaoke to your very own phone with the new app, Dub Rhymes. Children can record",
            parah2:"themselves as they sing along to these children’s classics. Brought to you by ReadingFriends.com, this",
            parah3:"app will delight your child with fantastic graphics and animation. Let Let the karaoke party begin!",
            parah4:" "
        })
    }
    handleRhyms=()=>{
        this.setState({
            heading:null,
            parah:null,
            parah2:null,
            parah3:null,
            parah4:null
        })
    }

    handleZamzam=()=>{
        this.setState({
            heading:"ZamZam International",
            parah:"Since established in 2005 ZamZam International has been a key player in the market for procuring new",
            parah2:"and used drilling equipment to satisfy the customer requirements. They deal in all types of equipment",
            parah3:"and drilling supplies and provide packaged service from ordering through to the complete shipping of",
            parah4:" the products to the specific country of delivery requirements."
        })
    }
    handleZz=()=>{
        this.setState({
            heading:null,
            parah:null,
            parah2:null,
            parah3:null,
            parah4:null
        })
    }
 

    render() {
       
        return (
            <div>
                <div>
                    
                        <div  className="row ">
                        <div className="row ">
                            <div  className="reading-friends" style={{textAlign:'center'}}>
                                <h1 className="heading" style={{fontSize:'50px',fontWeight:'bold',marginTop:'140px',marginBottom:'200px',fontFamily:"catamaran,sans-serif"}} OnClick={this.handleDiscription}>{this.state.heading}</h1>
                                <p className="parah">{this.state.parah}<br/>{this.state.parah2}
                                <br/>{this.state.parah3}
                                <br/>{this.state.parah4}</p>
                            </div>
                        </div>
                        </div>
                        <div  className="row d-flex justify-content-center">
                            <div style={{textAlign:'center'}} className="opti-care">
                            <h1  style={{fontSize:'50px',fontWeight:'bold',marginBottom:'200px',fontFamily:"catamaran,sans-serif"}}>Opticare Solution</h1>
                            <p>OptiCare Solution is a complete mini ERP for opticians and optometrists.<br/>
                                 We are the first to bring such an extensive solution in the field of Optometry,<br></br>
                                  providing features that are robust and easy to use.</p>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                    <div style={{marginTop:'270px'}} className="row ">
                        
                    <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                 <Reading
                 show={this.handleDiscription}
                 hide={this.leave}
               
                 />
                   
                    </div>
                    <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                   <Opticare
                    show={this.handleOpti}
                    hide={this.handleCare}
                    />
                   </div>
                    <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                   <DubRhyms
                      show={this.handleDub}
                      hide={this.handleRhyms}
                      />
                    </div>
                    <div className="col-lg-3 col-sm-3 col-3 d-flex justify-content-center">
                       <Zz
                        show={this.handleZamzam}
                        hide={this.handleZz}
                        />

                   </div>
                    
                    </div>
                
            </div>
        )
    }
}
