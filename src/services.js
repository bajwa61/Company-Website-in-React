import React, { Component } from 'react'
import './services.css';
import Particles from 'react-particles-js';

export default class services extends Component {
    constructor(props){
        super(props);
        this.state={
            img:require('./assets/web1.png'),
            img1:require('./assets/mobile1.png'),
            img2:require('./assets/block1.png'),
            img3:require('./assets/iot1.png'),
            img4:require('./assets/ai2.png'),
            img5:require('./assets/vr1.png'),
            newClass:"",
            heading1:"",
            parah1:"",
            parah2:"",
            parah3:"",
            particles:"visible"
          
            
        }
        this.handleImg=this.handleImg.bind(this);
        this.handleLeave=this.handleLeave.bind(this);
        this.handleMob=this.handleMob.bind(this);
        this.handleMobile=this.handleMobile.bind(this);
       
        this.handleBlock=this.handleBlock.bind(this);
        this.handleIot=this.handleIot.bind(this);
        this.handleAi=this.handleAi.bind(this);
        this.handleVr=this.handleVr.bind(this);
    
        
    }
    handleImg=()=>{
        this.setState({
            img:require('./assets/web2.png'),
            background:require('./assets/web-wall.jpg'),
            newClass:"web-img",
            heading1:"Web & Business Applications",
            parah1:"We have experts in providing business solutions in a plethora of domains, just the way you like",
            parah2:"it. Using modern framework and tools, we are capable of turning ordinary into something",
            parah3:"exciting",
            img1:null,
            img2:null,
            img3:null,
            img4:null,
            img5:null,
            particles:"invisible"
         
        });
    }
    handleLeave=()=>{
        this.setState({
            img:require('./assets/web1.png'),
            img1:require('./assets/mobile1.png'),
            img2:require('./assets/block1.png'),
            img3:require('./assets/iot1.png'),
            img4:require('./assets/ai2.png'),
            img5:require('./assets/vr1.png'),
           
            newClass:"",
            heading1:"",
            parah1:"",
            parah2:"",
            parah3:"" ,
            particles:"visible"
           
        });
    }
    handleMob=()=>{
        this.setState({
            img1:require('./assets/mobile2.png'),
            particles:"invisible",
            img:null,
            img2:null,
            img3:null,
            img4:null,
            img5:null,
            newClass:"mob-img",
            heading1:"Mobile Applications",
            parah1:"Eye-catching, sleek and modern are the words which define our work. We are the harbingers of",
            parah2:"quality of design and development in mobile based solutions, may it be for Andriod or iOS only",
            parah3:"or may it be across multiple platforms." 

        });
    }
    handleMobile=()=>{
        this.setState({
            img:require('./assets/web1.png'),
            img1:require('./assets/mobile1.png'),
            img2:require('./assets/block1.png'),
            img3:require('./assets/iot1.png'),
            img4:require('./assets/ai2.png'),
            img5:require('./assets/vr1.png'),  
             newClass:"",
            heading1:"",
            parah1:"",
            parah2:"",
            parah3:"" ,
            particles:"visible"
        });
    }
  
    
    handleBlock=()=>{
        this.setState({
            img2:require('./assets/block2.png'),
            newClass:"block-img",
            heading1:"Blockchain",
            parah1:"We create, deploy, configure and manage application on top of the Blockchain technology.",
            parah2:"Sounds easy right? That’s because we make it seem so.",
            parah3:"" ,
            img:null,
            img1:null,
            img3:null,
            img4:null,
            img5:null,
            particles:"invisible"
           

        });
    }
  
   
    handleIot=()=>{
        this.setState({
            img3:require('./assets/iot2.png'),
            newClass:"iot-img",
            heading1:"Internet Of Things",
            parah1:"We provide connectivity to your physical devices and appliances across your home and work",
            parah2:"place facilitating you to always keep your things under control.",
            parah3:"" ,
            img2:null,
            img:null,
            img1:null,
            img4:null,
            img5:null,
            particles:"invisible"
           
        });
     
    }
    handleAi=()=>{
        this.setState({
            img4:require('./assets/ai1.png'),
            newClass:"ai-img",
            heading1:"Artificial Intelligence",
            parah1:"Replicating the human senses into programs and machines is impossible no longer. We",
            parah2:"provide solutions which does just that. Stay ahead with the power of machine learning, deep",
            parah3:"learning, computer vision and data science." ,
            img2:null,
            img:null,
            img1:null,
            img3:null,
            img5:null,
            particles:"invisible"
           
        });
     
    }
    handleVr=()=>{
        this.setState({
            img5:require('./assets/vr2.png'),
           
            newClass:"vr-img",
            heading1:"AR/VR",
            parah1:"Augmented and virtual reality are two of the most attractive developments of current era. We ",
            parah2:" simply turn dreams into reality with the stroke of will.",
            parah3:"" ,
            img2:null,
            img:null,
            img1:null,
            img3:null,
            img4:null,
            particles:"invisible"
           
        });
     
    }
    handleBack=()=>{
        this.setState({
            img:require('./assets/web1.png'),
            img1:require('./assets/mobile1.png'),
            img2:require('./assets/block1.png'),
            img3:require('./assets/iot1.png'),
            img4:require('./assets/ai2.png'),
            img5:require('./assets/vr1.png'),  
             newClass:"",
            heading1:"",
            parah1:"",
            parah2:"",
            parah3:"" ,
            particles:"visible"
        });
    }
   
  
   
    render() {
        let particlesOpt={
            particles: {
                number: {
                    value: 50
                },
                size: {
                    value: 3
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: false
                        
                    }
                }
            }
       
           }
        return (
          <div id={this.state.newClass} style={{position:'fixed',width:'100%',height:'100%'}}  className="container-fluid bg ">
            
            <div className="discription row text-center">
                <h1 className="service-heading text-center">{this.state.heading1}</h1>
                
                <p className="service-parah">{this.state.parah1}
                <br/>{this.state.parah2}
                <br/>{this.state.parah3}</p>

            </div>
            <div style={{marginTop:'400px',width:'100%',zIndex:'4'}} className="row position-fixed">
            <div className="col-md-4 col-sm-4 col-4 ">
                <div   className="text-center">
                        <a href="#">
                            <img onMouseOver={this.handleIot} onMouseOut={this.handleBack} className="text-center" src={this.state.img3} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col4 ">
                <div   className="text-center">
                        <a href="#">
                            <img onMouseOver={this.handleAi} onMouseOut={this.handleBack} className="text-center" src={this.state.img4} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 ">
                <div   className="text-center">
                        <a href="#">
                            <img onMouseOver={this.handleVr} onMouseOut={this.handleBack} className="text-center" src={this.state.img5} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div id={this.state.particles}>
            <Particles
            
            params={particlesOpt}
            style={{position:'fixed',top:'618'}}
            />
            </div>
           
            
           <div style={{ width:'100%',height:'540px',overflow:'hidden',marginTop:'100px'}} className="row "> 
            
                <div  className="col-md-4 col-sm-4 col-4 ">
                    <div className="text-center">
                        <a href="#">
                            <img onMouseOver={this.handleImg} onMouseOut={this.handleLeave} className="text-center" src={this.state.img} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-4 ">
                <div className="text-center">
                        <a href="#">
                            <img onMouseOver={this.handleMob} onMouseOut={this.handleMobile} className="text-center" src={this.state.img1} alt=""/>
                        </a>
                    </div>
                </div>
                <div  className="col-md-4 col-sm-4 col-4 ">
                <div className="text-center">
                        <a href="#">
                            <img  onMouseOver={this.handleBlock} onMouseOut={this.handleLeave}className="text-center" src={this.state.img2} alt=""/>
                        </a>
                    </div>
                </div>
         
              
           </div>
          </div>
        )
    }
}
