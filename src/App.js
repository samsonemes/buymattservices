import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//css
import './styles/anchor.css'
import './styles/navlinks.css'

//nav && foot
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//pages
import Home from './views/HomePage';
import About from './views/AboutPage';
import Contact from './views/ContactPage';

//services pages
import WebDev from './views/Services/WebDevPage';
import AppDev from './views/Services/AppDevPage';
import Hosting from './views/Services/HostingPage';
import Marketing from './views/Services/MarketingPage';
import Seo from './views/Services/SeoPage';
import Graphics from './views/Services/GraphicsPage';
import Terms from './views/Terms';
import Pricing from './views/PricingPage';




function App(){
  return(
    <Router>
    <div className="relative">
    <Navigation/>
    <br/>
    <br/>
    <Switch>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>

    <Route path="/appdev" component={AppDev}/>
    <Route path="/webdev" component={WebDev}/>
    <Route path="/hosting" component={Hosting}/>
    <Route path="/marketing" component={Marketing}/>
    <Route path="/seo" component={Seo}/>
    <Route path="/graphics" component={Graphics}/>
    <Route path="/pricing" component={Pricing}/>

    <Route path="/terms" component={Terms}/>

    </Switch>
  

    <Footer/>
    </div>
    </Router>
  )
}

export default App;