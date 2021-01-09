import React from 'react';
import { Link } from 'react-router-dom';

export default function GetStarted(){
    return(
        <div className="bg-gray-900 py-16 px-6">
        <h2 className="text-center text-white mb-2 text-2xl font-bold">Let's Work Together</h2>
        
        <div className="text-white flex justify-center">

        <div>
        <button className="border px-6 text-cyan-600 py-2 outline-none hover:outline-none hover:bg-red-600"><Link to="/contact">Get Started</Link></button>
        </div>

        </div>
        </div>
    )
}