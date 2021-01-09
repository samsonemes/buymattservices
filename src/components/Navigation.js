import React from 'react';
import logo from '../assets/images/logo.png';

import arrowdown from '../assets/icons/down-arrow.svg';



//react spring
import {useTransition, animated} from 'react-spring';

// dropdown css
import '../styles/dropdown.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    const [services, setServices] = useState(false)

    const menuTransition = useTransition(showMenu, null, {
      from: { opacity: 0, transform: "translateX(100%)"},
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(100%)"}
      })


    return(
        <React.Fragment>
        <div className="w-screen fixed hidden md:block z-20 bg-white">
 
        <div className="flex justify-between py-4 bg-opacity-50 bg-white text-black">
        <div className="ml-8">

        <img className="h-auto w-24 object-cover" src={logo} alt=""/>

        </div>


        <div id="menu" className="hidden md:block">
            <ul className="nav flex mt-4 font-semibold">
                <li className="mr-10 text-sm uppercase"><Link to="/">Home</Link></li>
                <li className="mr-10 text-sm uppercase"><Link to="/about">About</Link></li>

                <li className="services mr-10 text-sm uppercase">
                <span>Services </span>
                  <ol className="dropdown text-left shadow-lg bg-white">
                  <div className="px-12">
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="webdev">Web Design & Development</Link></li>
                    <hr/>
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="appdev">Mobile App Development</Link></li>
                    <hr/>
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="hosting">Hosting & Web Solutions</Link></li>
                    <hr/>
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="marketing">Marketing & Branding</Link></li>
                    <hr/>
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="seo">Search Engine Optimization</Link></li>
                    <hr/>
                    <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="graphics">Graphics Design</Link></li>
                  
                    </div>
                    </ol>
                  
                
                </li>

                <li className="mr-10 text-sm uppercase"><a href="/pricing">Pricing</a></li>
                <li className="mr-10 text-sm uppercase"><a href="/contact">Contact</a></li>
            </ul>
        </div>
        </div>
        </div>

        <div className="md:hidden lg:hidden fixed w-full px-6 py-4 bg-white top-0 right-0 flex justify-between z-20">
        <div>

        <h3 className="font-bold">
          <img className="h-auto w-24 object-cover" src={logo} alt=""/>
        </h3>

        </div>

        <div>
        <button onClick={() => {
          setShowMenu(!showMenu)
        }}
        type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" color="black">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>


        {menuTransition.map(({ item, key, props }) =>
        item && 
        <animated.div key={key} style={props} className="fixed top-0 left-0 z-10 w-full h-full text-center bg-white bg-opacity-30 text-black">
        <button className="fixed top-0 right-0 px-6 py-2 focus:outline-none text-2xl text-red-600" onClick={() => {
          setShowMenu(!showMenu)
        }}>X</button>

        <button className="fixed top-0 left-0 px-6 py-4 focus:outline-none text-2xl" onClick={() => {
          setShowMenu(!showMenu)
        }}><img className="h-auto w-24 object-cover" src={logo} alt=""/></button>
        
        <ul className="m-10 py-12 text-start">
            <li className="mb-8 mt-8 text-lg uppercase font-bold"><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
            <hr/>
            <li className="mb-8 mt-8 text-lg uppercase font-bold"><Link to="/about" onClick={() => setShowMenu(false)}>About</Link></li>
            <hr/>
            <li className="mb-8 mt-8 text-lg uppercase font-bold flex justify-center" onClick={() => setServices(!services)}><span className="mr-3">Services </span><span><img className="h-3 w-3 mt-2" src={arrowdown} alt=""/></span></li>
            <ol className="text-center bg-white">
            <div className={services ? "block" : "hidden"}>
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/webdev" onClick={() => setShowMenu(false)}>Web Design & Development</Link></li>
             
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/appdev" onClick={() => setShowMenu(false)}>Mobile App Development</Link></li>
             
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/hosting" onClick={() => setShowMenu(false)}>Hosting & Web Solutions</Link></li>
         
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/marketing" onClick={() => setShowMenu(false)}>Marketing & Branding</Link></li>
          
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/seo" onClick={() => setShowMenu(false)}>Search Engine Optimization</Link></li>
        
              <li className="py-3 text-xs cursor-pointer hover:text-red-700"><Link to="/graphics" onClick={() => setShowMenu(false)}>Graphics Design</Link></li>
            
              </div>
              </ol>
            <hr/>
            <li className="mb-8 mt-8 text-lg uppercase font-bold"><Link to="/pricing" onClick={() => setShowMenu(false)}>Pricing</Link></li>
            <hr/>
            <li className="mb-8 mt-8 text-lg uppercase font-bold"><Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link></li>
            <hr/>

            <div className="absolute bottom-0 left-0 right-0 p-3 text-gray-500"><p>&copy; 2021 buymatt</p></div>
        </ul>
        
        
        </animated.div>
        )}

        </div>

        </div>
        </React.Fragment>
    )
}

export default Navigation;