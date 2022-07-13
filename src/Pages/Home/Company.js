import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import copyscape from '../../images/company/copyscape.png'
import frase from '../../images/company/frase.png'
import hemingway from '../../images/company/hemingway.png'
import grammarly from '../../images/company/grammarly.png'
import surfer from '../../images/company/surfer.png'

const company = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      }
      return(
        <div className=' px-12 mb-36 mt-36 '>
          
          <Slider {...settings}>
            <div>
              <img style={{width:'300px',height: '80px'}} src={copyscape} alt="" />
            </div>
            <div>
             <img style={{width:'300px' ,height: '80px'}} src={frase} alt="" />
            </div>
            <div>
              <img style={{width:'300px' ,height: '80px'}} src={hemingway} alt="" />
            </div>
            <div>
          <img style={{width:'300px' ,height: '80px'}} src={grammarly} alt="" />
            </div>
            <div>
             <img style={{width:'300px' ,height: '80px'}} src={surfer} alt="" />
            </div>
      
          </Slider>
        </div>
      );
    }

export default company;