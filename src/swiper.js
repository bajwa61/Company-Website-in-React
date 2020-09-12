import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './fontawesome-free-5.10.1-web/css/fontawesome.min.css';
import './fontawesome-free-5.10.1-web/css/all.css';
import Services from './services';


import Swiper from 'react-id-swiper';

  import 'react-id-swiper/lib/styles/css/swiper.css';
 import Home from './home';

 import Culture from './culture';

import './bootstrap.min.css'

import TestiMentals from './testimentals';

import Updates from './updates';
import JoinUs from './joinus';
import Contact from './contact';
import Team from './team';

import PortFolio from './portfolio';




 





class Example extends React.Component {
  

  render() {
    const params = {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return (
      <Swiper {...params}>
        <div  id="homee">
          <Home/>
        </div>
        <div>
          <Services/>
        </div>
        <div id="culture">

          <Culture/>
        </div>
        <div id="team">
          <Team/>
        </div>
        <div id="portfolio">

          <PortFolio/>
        </div>
        <div id="testimentials">

          <TestiMentals/>
        </div>
        <div id="updates">
<Swiper>
  <div>
<Updates/>
  </div>
  <div>
    
  </div>
  <div>
    
  </div>
  <div>
    
  </div>
</Swiper>
          
        </div>
        <div id="currer">
          <JoinUs/>
        </div>
        <div id="contact">

        <Contact/>
        </div>
      </Swiper>
    )
  }
  };
 

export default Example;