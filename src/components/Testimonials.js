import React from 'react';

import Carousel from 'nuka-carousel';

export default function Testimonials(){
    return(
        <div className="m-16">
        <h3 className="text-center mb-6 text-2xl underline">Testimonials</h3>
        <div className="border px-4 py-12 shadow-lg">
        <Carousel withoutControls={true} autoplay={true} transitionMode="scroll">

       <div className="text-center">
       <p className="font-sans text-lg text-gray-700">"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you."</p>
       <h2 className="mt-6 font-semibold">~ John</h2>
       </div>

       <div className="text-center text-lg text-gray-700">
       <p>"It's really great how easy your websites are to update and manage. I never have any problem at all."</p>
       <h2 className="mt-6 font-semibold">~ Peter</h2>
       </div>

        </Carousel>
        </div>
        </div>
    )
}