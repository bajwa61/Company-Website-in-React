import React, { Component } from 'react'
import './contact.css';
import axios from 'axios';

export default class contact extends Component {
  handleSubmit(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
  
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
             
            email: email
           
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
    document.getElementById('contact-form').reset();
}
    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="row d-flex align-items-center fullscreen award-content">
                <div className="col-lg-6 d-none d-sm-none position-relative d-md-none d-lg-block no-padding" style={{padding:'0',marginBottom:'0px',marginTop:'0px'}}>
                <div className="google-map" style={{height:'-webkit-fill-available',overflow:'hidden'}}>
                <div style={{maxHeight:'100%',maxWidth: '100%'}}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1hiXruGF0sA5J2yAc2nCoq0hJgOuIKr5S" 
                width="1000" height="1000" style={{height:'1980px',maxWidth: '100%',marginTop: '-100px'}} frameborder="0">

                </iframe>
                </div>
                <div style={{position:' absolute',top:'0',left:'0',right:'0',bottom:'0',background: 'rgba(2,11,43,0.6)'}}>
                <div classNamew="card " style={{border:'0',position: 'absolute',top:'50%',left:'50%',marginTop:'-100px',marginLeft:'-200px',width:'400px',background: 'rgba(0  ,0  ,0  ,0.3)',borderRadius: '20px'}}>
                <div className="card-header text-center"  style={{backgroundColor:'  #020920',border:'black',color:'white',border:'0',borderTopLeftRadius: '20px',borderTopRightRadius: '20px',fontWeight: '700',fontSize: '32px',padding:'20px'}}>
                              Get a Quote
                            </div>
                            <div className="card-body">
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group" style={{padding:'0 30px 40px'}}>
									<input  type="email"   className="form-control form-control-lg" placeholder="Email*" style={{background:'#020920',border:'black',color:'white',borderRadius: '10px',fontWeight:' 900',height:'50px'}}/>
                                </div>
                                <button  type="button" className="btn btn-primary" style={{ marginLeft:'90px',backgroundColor: '#0422b7', borderColor: '#000',borderWidth:' 0', borderRadius: '30px', boxShadow: 'rgb(8, 1, 45) 0px 0px 10px inset', letterSpacing: '1px', backgroundImage: 'linear-gradient(to right, #060f68 0%, #08012d 51%, #08012d 100%)',padding:'10px 50px',fontWeight: '900'}}>SUBMIT</button>
                                </form>
                                </div>
                </div>
</div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="content text-center" style={{marginLeft: '40px'}}>
                <div  style={{marginBottom:'50px'}} className="social-icon in-contact-section d-flex justify-content center">
                <a target="_blank" href="https://www.facebook.com/newstateofficial"><span><i   style={{color:'white',marginLeft:'100px'}} className="fab fa-facebook-f"></i></span></a>
					      	<a target="_blank" href="https://twitter.com/NewState_Tweets/"><span ><i  style={{color:'white',marginLeft:'30px'}} className="fab fa-twitter"></i></span></a>
                            <a target="_blank" href="https://www.linkedin.com/company/new-state-official"><span ><i  style={{color:'white',marginLeft:'30px'}}  className="fab fa-linkedin-in"></i></span></a>
                            <a href="skype:live:admin_173611?call"><span ><i style={{color:'white',marginLeft:'30px'}} className="fab fa-skype"></i></span></a>
                            <a target="_blank" href="https://github.com/new-state"><span><i style={{color:'white',marginLeft:'30px'}} className="fab fa-github-alt"></i></span></a>
                            <a target="_blank" href="https://www.behance.net/newstateofficial"><span ><i style={{color:'white',marginLeft:'30px'}} className="fab fa-behance"></i></span></a>
                            <a target="_blank" href="https://dribbble.com/NewStateOfficial"><span><i style={{color:'white',marginLeft:'30px'}} className="fab fa-dribbble"></i></span></a>
                            <a target="_blank" href="https://www.instagram.com/newstateofficial/"><span ><i style={{color:'white',marginLeft:'30px'}} className="fab fa-instagram"></i></span></a>
                            <a target="_blank" href="https://www.tumblr.com/blog/newstatestuff"><span><i style={{color:'white',marginLeft:'30px'}} className="fab fa-tumblr"></i></span></a>
                </div>
                <ul style={{display:'inline',listStyleType:'none'}} className="rn-award-list text-left">
                                            <li styel={{marginBottom:'40px'}}>
                                              <span  id="address" > <i style={{size:'20px'}} class="far fa-map"></i></span>
                                                <a style={{color:'white',alighnText:'start',textDecoration:'none',marginLeft:'30px',marginTop:'20px'}}>House # B-108, &nbsp;1st Floor, Anaya &nbsp;Manzil, &nbsp;Near Bilal<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Park,
                                                Commercial Market Rd, Rehmanabad, B Block &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Satellite Town,Rawalpindi, Pakistan  </a>
                                               </li>
                                               <li><span id="address2" ></span></li>
                                            <li styel={{marginBottom:'30px'}}>
                                              <span  id="number"  ><i class="fas fa-phone"></i></span>
                                                <a style={{color:'white',textDecoration:'none',marginBottom:'40px'}} href="tel:+92518356724">&nbsp;&nbsp;&nbsp;+(92) 51 835 6724</a>
                                            </li>
                                            <li>
                                              <span id="web"  ><i class="far fa-comment-alt"></i></span>
                                                <a style={{color:'white',textDecoration:'none'}} href="mailto:info@newstate.io">&nbsp;&nbsp;&nbsp;info@newstate.io</a>
                                            </li>
                                        </ul>
                                        <div >
                          	<div className="col-12">
                          	  <a target="_blank" href="http://newstate.io/wp-content/uploads/2019/08/Brochure-1.2.pdf" style={{background: 'linear-gradient(to top right, #020613 20px, #fc3d09 80px)', borderRadius: '50px', color: '#122dff', display: 'inline-block' ,fontSize: '20px' ,padding: '4px', textDecoration: 'none'}}><span style={{background:'#020613',display:'block',color:'#fff',fontWeight:'700',padding:'10px 60px',borderRadius:'50px'}}>DOWNLOAD BROCHURE</span></a>
                          </div>
                		</div>
                </div>
                </div>
                </div>

                </div>
            </div>
            
        )
    }
}
