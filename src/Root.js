import React from 'react';

import {Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Traffic from './Products/Traffic';

export default class Root extends React.Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/urunlerimiz/kasko" component={Home} />
                    <Route path="/urunlerimiz/trafik" component={Traffic} />
                    <Route path="/urunlerimiz/saglik" component={Home} />
                    <Route path="/urunlerimiz/seyahat" component={Home} />
                    <Route path="/urunlerimiz/nakliyat" component={Home} />
                    <Route path="/urunlerimiz/konut" component={Home} />
                </Switch>
            </div>
        )
    }

}