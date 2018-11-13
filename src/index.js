import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App/App';
import LandingB2B from './pages/Landing_b2b/LandingB2B'
import LandingB2C from './pages/Landing_b2c/LandingB2C'
import Schools from './pages/Schools/Schools'
import LandingNonprofits from './pages/Landing_nonprofits/LandingNonprofits'
import B2C_PDP from './pages/B2C_PDP/B2C_PDP'
import About from './pages/About/About'
import FAQs from './pages/FAQs/FAQs'
import Home from './pages/Home/Home'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// <Router>
//   <div>
//     Route exact path="/" component=""
//   </div>
// </Router>
// function Router(props){
//   return (
//     <Router>
//       <Switch match="/" component={Home} />
//     </Router>
//   )
// }
function Router(props){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/students" component={LandingB2C}/>
        <Route exact path="/schools" component={Schools}/>
        <Route exact path="/business" component={LandingB2B}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/nonprofits" component={LandingNonprofits}/>
        <Route exact path="/pdp/:course" component={B2C_PDP}/>
        <Route exact path="/faqs" component={FAQs}/>
        // <Route exact path="/students/#OurClasses/:type"/>
      </Switch>
    </BrowserRouter>
  )
}
ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();
