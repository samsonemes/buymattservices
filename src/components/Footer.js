import React from 'react';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div className="bg-white font-sans text-black text-center py-6">
        <hr/>
        <div className="md:flex justify-around text-left m-12">

        <div className="mb-6 md:mb-0">
        <h2 className="text-xl text-gray-800 font-bold">Services</h2>
        <ul>
        <li className="text-sm mb-2"><Link to="/">Web Design & Development</Link></li>
        <li className="text-sm mb-2"><Link to="/">Mobile App Development</Link></li>
        <li className="text-sm mb-2"><Link to="/">Hosting & Web Solutions</Link></li>
        <li className="text-sm mb-2"><Link to="/">Marketing & Branding</Link></li>
        <li className="text-sm mb-2"><Link to="/">Search Engine Optimization</Link></li>
        <li className="text-sm mb-2"><Link to="/">Graphics Design</Link></li>
        
        </ul>
        
        </div>

        <div className="mb-6 md:mb-0">
        <h2 className="text-xl text-gray-800 font-bold">Company</h2>
        <ul className="">
        <li className="text-sm"><Link to="/">Buymatt - Online Shopping</Link></li>
        <li className="text-sm"><Link to="/">Buymatt - Services</Link></li>
        <li className="text-sm"><Link to="/">Buymatt - Pay</Link></li>
        
        </ul>
        
        </div>


        <div className="mb-6 md:mb-0">
        <h2 className="text-xl text-gray-800 font-bold">Other Links</h2>

        <ul>
        <li className="text-sm"><Link to="/">Advertise With Us</Link></li>
        <li className="text-sm"><Link to="/">Discounts & Coupons</Link></li>
        <li className="text-sm"><Link to="/">Terms & Conditions</Link></li>
        <li className="text-sm"><Link to="/">Technical Support</Link></li>
        
        </ul>
        
        </div>

        </div>

        <div>
        <h4 className="text-sm mt-3">&copy; 2021 Buymatt Services</h4>
        </div>

        </div>
    )
}

export default Footer;