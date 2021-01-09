import React from 'react';
import {Link} from 'react-router-dom';

//fontawesome
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import  '@fortawesome/free-solid-svg-icons';

//images
import ideas from '../assets/images/ideas.jpg';

//icons
import laptop from '../assets/icons/laptop.svg';
import brand from '../assets/icons/flyers.svg';
import innovate from '../assets/icons/innovation.svg';
import grow from '../assets/icons/bars.svg';



export default function About(){
    return(
        <React.Fragment>
        <div className="mt-12">
        
        <h2 className="font-bold text-center text-xl uppercase navlink">Welcome</h2>


        <div className="mt-4">
            <div className="bg-red-100 lg:py-12 lg:flex lg:justify-center">
                <div className="bg-gray-100 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: "url(" + ideas + ")"}}></div>
                    </div>
                    <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 style={{color:"#fc0404"}} className="text-3xl text-gray-800 font-bold flex text-center">Buymatt Services <span className="mt-2 ml-6"><img src={laptop} className="h-8 w-8" alt=""/></span></h2>
                        <p className="mt-4 text-gray-600">In business, we need to identify our target users, and determine where to allocate resources in order to reach them most effectively. 
                       <br/>
                       <br/>
                        Our major aim to bridge the gap between <span className="font-semibold">businesses</span> and their <span className="font-semibold">target users</span> with the use of technological tools to help them innovate and grow faster. <span className="font-semibold"> </span> </p>
                       
                    </div>
                </div>
            </div> 
        </div>
       

       

        <div>
        
        <h2 className="uppercase text-center text-2xl mt-12 font-bold">Objectives</h2>

        <div className="ml-0 mr-0">

       <div className="md:flex justify-around mt-12 w-full text-center mb-24">
       
       <div className="mt-6">
       <h1 className="flex justify-center"><img className="h-12 w-12" src={innovate} alt=""/></h1>
       <h2 className="text-lg font-semibold">Innovate</h2>
       ideas that are great to the community
       </div>

       <div className="mt-6">
       <h1 className="flex justify-center"><img className="h-12 w-12" src={grow} alt=""/></h1>
       <h2 className="text-lg font-semibold">Grow</h2>
       ideas that are great to the community
       </div>

       <div className="mt-6">
       <h1 className="flex justify-center"><img className="h-12 w-12" src={brand} alt=""/></h1>
       <h2 className="text-lg font-semibold">Brand</h2>
       ideas that are great to the community
       </div>
       
       </div>
       </div>

        </div>
        

        <div className="bg-gray-900 py-16 px-6">
        <h2 className="text-center text-white mb-2 text-2xl font-bold">Any inquiries ?</h2>
        
        <div className="text-white flex justify-center">

        <div>
        <button className="border px-6 text-cyan-600 py-2 outline-none hover:outline-none hover:bg-red-600"><Link to="/contact">Contact Us</Link></button>
        </div>

        </div>
        </div>
      
        
      

        
        </div>
        </React.Fragment>
    )
}