import React from 'react';

import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import GetStarted from './GetStarted';
import Sponsors from './Sponsors'

export default function Home(){
    return(
        <React.Fragment>

        <Hero/>

        <WhatWeDo/>
        
        <GetStarted/>

        <Sponsors/>

        </React.Fragment>

    )
}