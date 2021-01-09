import React from 'react';
import '../styles/navlinks.css'

//icons
import smartdraw from '../assets/sponsors/smartdraw-ar21.svg';
import deployhq from '../assets/sponsors/deployhq-ar21.svg';
import coredns from '../assets/sponsors/corednsio-ar21.svg';

export default function Sponsors(){
    return(
        <div>

        <h2 className="text-center text-2xl mt-24 navlink uppercase mb-12">Sponsors</h2>
        
        <div className="md:flex md:justify-around mb-12">

        <div className="flex justify-center mt-6">
        <img src={smartdraw} alt=""/>
        
        </div>


        <div className="flex justify-center mt-6">
        <img src={deployhq} alt=""/>
        
        </div>

        <div className="flex justify-center mt-6">
        <img src={coredns} alt=""/>
        
        </div>
        
        
        </div>
        
        </div>
    )
}