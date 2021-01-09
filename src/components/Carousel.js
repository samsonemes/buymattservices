import React from 'react';
//nuka-carousel
import Carousel from 'nuka-carousel';

//fontawesome
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'

//images
import customer from '../assets/images/customer.jpg';
import graphics from '../assets/images/graphics.jpg'
import code from '../assets/images/code.jpg';
import '@fortawesome/free-solid-svg-icons';


export default function Slider(){
    return(
        <div className="relative">
        <Carousel withoutControls={true} autoplay={true} transitionMode="scroll" wrapAround={true}>

        <img style={{height: "500px"}} className="w-full object-cover object-center" src={customer} alt="" />
        
        <img style={{height: "500px"}} className="w-full object-cover" src={code} alt=""/>
        <img style={{height: "500px"}} className="w-full object-cover object-center" src={graphics} alt=""/>
        

        </Carousel>

       { 
        // <div className="absolute z-20 top-0 left-0
        // ">
        // <h2 style={{marginTop: "250px", marginLeft:"auto", marginRight:"auto"}} className="px-6 font-serif text-2xl md:text-6xl font-bold text-red-700">Buymatt Services</h2>
        // </div>

        // <div className="absolute z-10 top-0 left-0
        // ">
        // <h4 style={{marginTop: "350px"}} className="m-6 text-white">Make Ideas Happen</h4>
        // </div>
        }
       
        </div>
    )
}