import React from 'react';

import {Route,Switch, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Traffic from './Products/Traffic';
import Kasko from './Products/Kasko';
import Health from './Products/Health';
import Nakliyat from './Products/Nakliyat';
import Travel from './Products/Travel';
import Konut from './Products/Konut';
import About from './Components/About';
import Contact from "./Components/Contact";
import Rehber from './Components/Rehber';

export default class Root extends React.Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/urunlerimiz/kasko" component={Kasko} />
                    <Route path="/urunlerimiz/trafik" component={Traffic} />
                    <Route path="/urunlerimiz/saglik" component={Health} />
                    <Route path="/urunlerimiz/seyahat" component={Travel} />
                    <Route path="/urunlerimiz/nakliyat" component={Nakliyat} />
                    <Route path="/urunlerimiz/konut" component={Konut} />
                    <Route path="/hakkımızda" component={About} />
                    <Route path="/contact   " component={Contact} />
                    <Route path="/rehber" component= {Rehber} /> 
                    <Redirect to = "/"></Redirect> 
                </Switch>
            </div>
        )
    }

}