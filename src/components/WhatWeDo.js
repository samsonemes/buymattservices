import React from 'react';

// icons
import seo from '../assets/icons/web-development.svg';
import webdev from '../assets/icons/device.svg';
import hosting from '../assets/icons/hosting.svg';
import appdev from '../assets/icons/smartphone.svg';
import market from '../assets/icons/startup.svg';
import graphics from '../assets/icons/graphics.svg';


export default function WhatWeDo(){
    return(
        <div>

        <h2 className="text-center mt-12 text-xl font-bold uppercase navlink">Our Services</h2>
        
        <div className="md:flex md:justify-around text-left m-12">

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={webdev} alt=""/>
        </div>
        <h3 className="text-center">Web Design & Development</h3>
        </div>

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={appdev} alt=""/>
        </div>
        <h3 className="text-center">Mobile App Devleopment</h3>
        </div>

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={hosting} alt=""/>
        </div>
        <h3 className="text-center">Hosting & Web Solutions</h3>
        </div>

        </div>


        <hr/>

        <div className="md:flex md:justify-around text-left m-12">

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={market} alt=""/>
        </div>
        <h3 className="text-center">Marketing & Branding</h3>
        </div>

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={seo} alt=""/>
        </div>
        <h3 className="text-center">Search Engine Optimization (SEO)</h3>
        </div>

        <div className="mb-12">
        <div className="">
        <img className="h-12 w-12 object-center ml-auto mr-auto" src={graphics} alt=""/>
        </div>
        <h3 className="text-center">Graphics Design</h3>
        </div>

        </div>

        

        </div>
    )
}
